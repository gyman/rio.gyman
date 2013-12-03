<?php

// <editor-fold defaultstate="collapsed" desc="namespace related">

namespace Dende\VouchersBundle\Controller;

use Dende\MembersBundle\Entity\Member;
use Dende\VouchersBundle\Entity\Voucher;
use Dende\VouchersBundle\Form\VoucherType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Hackzilla\BarcodeBundle\Utility\Barcode;
use Dende\VouchersBundle\Exception\VoucherManagerException; // </editor-fold>

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
     * @Route("/new/member/{id}/decision/{decision}", name="_voucher_new", defaults={"decision" = null})
     * @ParamConverter("member", class="MembersBundle:Member")
     * @Template()
     */
    public function newVoucherAction(Request $request, Member $member, $decision) {
        $response = new Response(
                'Content', 200, array('content-type' => 'text/html')
        );

        $voucherManager = $this->get("voucher_manager");
        $currentVoucher = $this->get("member_manager")->getCurrentVoucher($member);
        $decision = $request->get("decision");

        if ($decision == "confirm" && $currentVoucher)
        {
            $voucherManager->closeVoucher($currentVoucher);
            $currentVoucher = null;
        }

        if ($currentVoucher && $decision != "deny")
        {
            return $this->forward("VouchersBundle:Default:closeVoucher", array(
                        "id" => $currentVoucher->getId(),
            ));
        }

        if ($decision == "confirm" || $decision == null)
        {
            $voucher = $voucherManager->createNewVoucherNow($member);
        }
        else if ($decision == "deny")
        {
            $voucher = $voucherManager->createNewVoucherAtEndDate($member);
        }
        
        $form = $this->createForm(new VoucherType($this->get("activity_manager")), $voucher);

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
                            "member"  => $member,
                            "decision" => $decision
                                )
                        )
        );
    }

    /**
     * @Route("/{id}/close", name="_voucher_close")
     * @ParamConverter("voucher", class="VouchersBundle:Voucher")
     * @Template()
     */
    public function closeVoucherAction(Request $request, Voucher $voucher) {

        $diff = $voucher->getEndDate()->diff(new \DateTime());

        return array(
            "voucher"  => $voucher,
            "leftDays" => $diff->days
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
