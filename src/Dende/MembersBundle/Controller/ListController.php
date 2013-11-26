<?php

namespace Dende\MembersBundle\Controller;

use Dende\MembersBundle\Entity\Member;
use Dende\MembersBundle\Form\MemberType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;

class ListController extends Controller {

    /**
     * @Route("/dashboard", name="_dashboard")
     * @Template("MembersBundle:List:dashboard.html.twig")
     * @todo Przenieść do osobnego bundle'a
     */
    public function dashboardAction() {
        return array();
    }

    /**
     * @Route("/list", name="_members_list")
     * @Template("MembersBundle:List:list.html.twig")
     */
    public function listAction() {
        $memberManager = $this->get("member_manager");
        $members = $memberManager->getMembers();

        return array("members" => $members);
    }

    /**
     * @Route("/gallery", name="_members_gallery")
     * @Template("MembersBundle:List:gallery.html.twig")
     */
    public function galleryAction() {
        return $this->listAction();
    }

    /**
     * @Route("/{id}/edit", name="_member_edit")
     * @ParamConverter("member", class="MembersBundle:Member")
     * @Template()
     */
    public function editAction(Member $member) {
        $request = $this->get('request');

        $response = new Response(
                'Content', 200, array('content-type' => 'text/html')
        );

        $memberManager = $this->get("member_manager");

        $uploaderHelper = $this->container->get('oneup_uploader.templating.uploader_helper');

        $form = $this->createForm(new MemberType($uploaderHelper), $member);

        if ($request->getMethod() == 'POST')
        {
            $form->handleRequest($request);

            if ($form->isValid())
            {
                $memberManager->persist($member);
                $memberManager->flush();
            }
            else
            {
                $response->setStatusCode(400);
            }
        }

        return $response->setContent(
                        $this->renderView("MembersBundle:List:edit.html.twig", array(
                            'form'    => $form->createView(),
                            'member'  => $member,
                            'voucher' => $memberManager->getCurrentVoucher($member)
                                )
                        )
        );
    }

    /**
     * @Route("/new", name="_member_new")
     * @Template()
     */
    public function newAction() {
        $request = $this->get('request');
        $response = new Response(
                'Content', 200, array('content-type' => 'text/html')
        );

        $member = new Member();
        $uploaderHelper = $this->container->get('oneup_uploader.templating.uploader_helper');
        $form = $this->createForm(new MemberType($uploaderHelper), $member);
        $memberManager = $this->get("member_manager");

        if ($request->getMethod() == 'POST')
        {
            $form->handleRequest($request);

            if ($form->isValid())
            {
                $memberManager->save($member);
            }
            else
            {
                $response->setStatusCode(400);
            }
        }

        return $response->setContent(
                        $this->renderView("MembersBundle:List:new.html.twig", array(
                            'form'   => $form->createView(),
                            'member' => $member,
                            'isNew'  => true
                                )
                        )
        );
    }

    /**
     * @Route("/{id}/delete", name="_member_delete")
     * @ParamConverter("member", class="MembersBundle:Member")
     * @Template()
     */
    public function deleteAction(Member $member) {
        $memberManager = $this->get("member_manager");
        $memberManager->delete($member);
        return array();
    }

    /**
     * @Route("/{id}/currentVoucher", name="_member_current_voucher")
     * @ParamConverter("member", class="MembersBundle:Member")
     * @Template()
     */
    public function currentVoucherAction(Member $member) {
        
        $voucher = $this->get("member_manager")->getCurrentVoucher($member);
        
        return array(
            "voucher" => $voucher
        );
    }
    
}
