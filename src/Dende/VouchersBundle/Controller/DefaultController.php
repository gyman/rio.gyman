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
    public function newAction(Member $member) {
        $request = $this->get('request');

        $response = new Response(
                'Content', 200, array('content-type' => 'text/html')
        );

        $activityManager = $this->get("activity_manager");
        $voucherManager = $this->get("voucher_manager");

        $previousVouchersCollection = $member->getVouchers();

        $voucher = new Voucher();

        if ($previousVouchersCollection->count() > 0)
        {
            $lastVoucher = $previousVouchersCollection->last();
            $voucher->setPreviousVoucher($lastVoucher);
            $startDate = clone($lastVoucher->getEndDate());
            $startDate->add(new \DateInterval("P1D"));
        }
        else
        {
            $lastVoucher = null;
            $startDate = new \DateTime();
        }

        $endDate = clone($startDate);
        $endDate->add(new \DateInterval("P1M"));

        $voucher->setMember($member);
        $voucher->setStartDate($startDate);
        $voucher->setEndDate($endDate);
        $voucher->setPrice(100);
        $voucher->setAmount(10);

        $form = $this->createForm(new VoucherType($activityManager), $voucher);

        if ($request->getMethod() == 'POST')
        {
            $form->handleRequest($request);

            if ($form->isValid())
            {
                $member->setLastVoucher($voucher);
                $this->get("member_manager")->save($member);
                $voucherManager->save($voucher);
            }
            else
            {
                $response->setStatusCode(400);
            }
        }

        return $response->setContent(
                        $this->renderView("VouchersBundle:Default:new.html.twig", array(
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

}
