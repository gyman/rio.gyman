<?php

namespace Dende\VouchersBundle\Controller;

use Dende\VouchersBundle\Entity\Voucher;
use Dende\VouchersBundle\Form\VoucherType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;

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
     * @Route("/new/{id}", name="_voucher_new")
     * @Template()
     */
    public function newAction($id) {
        $request = $this->get('request');

        $response = new Response(
                'Content', 200, array('content-type' => 'text/html')
        );
        
        $memberManager = $this->get("member_manager");
        $member = $memberManager->getById($id);

        $activityManager = $this->get("activity_manager");
        $voucher = new Voucher();
        $form = $this->createForm(new VoucherType($activityManager), $voucher);
        $voucherManager = $this->get("voucher_manager");
        
        if ($request->getMethod() == 'POST')
        {
            $form->handleRequest($request);

            if ($form->isValid())
            {
                $voucher->setMember($member);
                $voucherManager->persist($voucher);
                $voucherManager->flush();
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
