<?php

namespace Dende\VouchersBundle\Controller;

use Dende\MembersBundle\Entity\Member;
use Dende\VouchersBundle\Entity\Voucher;
use Dende\VouchersBundle\Form\VoucherType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Hackzilla\BarcodeBundle\Utility\Barcode;

class DefaultController extends Controller {

    /**
     * @Route("/list", name="_voucher_list")
     * @Template("VouchersBundle:List:list.html.twig")
     */
    public function listAction() {
        $memberManager = $this->get("voucher_manager");
        $members = $memberManager->getMembers();

        return array("members" => $members);
    }

    /**
     * @Route("/{id}/edit", name="_voucher_edit")
     * @Template()
     */
    public function editAction($id) {
        $request = $this->get('request');

        $response = new Response(
                'Content', 200, array('content-type' => 'text/html')
        );

        $voucherManager = $this->get("voucher_manager");
        $voucher = $voucherManager->getById($id);

        $form = $this->createForm(new VoucherType(), $voucher);

        if ($request->getMethod() == 'POST')
        {
            $form->handleRequest($request);

            if ($form->isValid())
            {
                $voucherManager->persist($voucher);
                $voucherManager->flush();
            }
            else
            {
                $response->setStatusCode(400);
            }
        }

        return $response->setContent(
                        $this->renderView("VouchersBundle:List:edit.html.twig", array(
                            'form'    => $form->createView(),
                            'voucher' => $voucher
                                )
                        )
        );
    }

    /**
     * @Route("/new/member/{id}", name="_voucher_new")
     * @ParamConverter("member", class="MembersBundle:Member")
     * @Template()
     */
    public function newVoucherAction(Member $member) {
        $request = $this->get('request');

        $response = new Response(
                'Content', 200, array('content-type' => 'text/html')
        );

        $activityManager = $this->get("activity_manager");
        $voucherManager = $this->get("voucher_manager");

        $voucher = $voucherManager->createNewVoucher($member);

        $form = $this->createForm(new VoucherType($activityManager), $voucher);

        if ($request->getMethod() == 'POST')
        {
            $form->handleRequest($request);

            if ($form->isValid())
            {
                $member->setLastVoucher($voucher);
                $voucher->setAmountLeft($voucher->getAmount());
                $voucherManager->save($voucher);

                $this->get("member_manager")->save($member);

                return $this->forward("VouchersBundle:Default:printVoucherButton", array(
                            "id" => $voucher->getId()));
            }
            else
            {
                $response->setStatusCode(400);
            }
        }

        return $response->setContent(
                        $this->renderView("VouchersBundle:Default:newVoucher.html.twig", array(
                            'form'    => $form->createView(),
                            'voucher' => $voucher,
                            "member"  => $member
                                )
                        )
        );
    }

    /**
     * @Route("/{id}/delete", name="_voucher_delete")
     * @Template()
     */
    public function deleteAction($id) {
        $voucherManager = $this->get("voucher_manager");
        $voucherManager->setAsDeleted($id);
        return array();
    }

    /**
     * @Route("/{id}/printButton", name="_voucher_print_modal_content")
     * @Template()
     */
    public function printVoucherButtonAction(Voucher $voucher) {
        return array(
            "voucher" => $voucher
        );
    }

    /**
     * @Route("/{id}/print", name="_voucher_print")
     * @Template()
     */
    public function printVoucherAction(Voucher $voucher) {
        return array(
            "voucher" => $voucher
        );
    }

    /**
     * @Route("/barcode/{code}", name="_voucher_barcode")
     */
    public function getBarcodeAction($code) {
        $barcode = new Barcode($this->container);
        $barcode->setEncoding("128B");
        $barcode->setScale(1);
        $barcode->setHeight(50);
        echo $barcode->outputImage($code);

        return array();
    }

}
