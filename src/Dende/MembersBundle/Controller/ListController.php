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
use Dende\MembersBundle\Services\Manager\MemberManager;
use Dende\MembersBundle\Form\MemberListFilterType;

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
     * @Route("/", name="_members_list")
     * @Template("MembersBundle:List:list.html.twig")
     */
    public function indexAction() {
        $memberManager = $this->get("member_manager");
        $members = $memberManager->getMembers();

        return array("members" => $members);
    }

    /**
     * 
     * TODO: action for filter
     * 
    public function filterListAction() {
        $form = $this->createForm(new MemberFilterListType($uploaderHelper), $member);

        if ($request->getMethod() == 'POST')
        {
            $form->handleRequest($request);

            if ($form->isValid())
            {
//                $memberManager->persist($member);
//                $memberManager->flush();
            }
            else
            {
                $response->setStatusCode(400);
            }
        }

        return $response->setContent(
            $this->renderView("MembersBundle:List:edit.html.twig", array(
                'form'     => $form->createView(),
                'member'   => $member,
                'voucher'  => $voucher,
                "uploader" => $uploaderHelper,
                    )
            )
        );
    }
     **/

    /**
     * @Route("/gallery", name="_members_gallery")
     * @Template("MembersBundle:List:gallery.html.twig")
     */
    public function galleryAction() {
        return $this->indexAction();
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

        /** @var MemberManager Description */
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

        $voucher = $memberManager->getCurrentVoucher($member);

        return $response->setContent(
                        $this->renderView("MembersBundle:List:edit.html.twig", array(
                            'form'     => $form->createView(),
                            'member'   => $member,
                            'voucher'  => $voucher,
                            "uploader" => $uploaderHelper,
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
                
                $request->getSession()->getFlashBag()->add('notice', 'Dodano nowego użytkownika!');
            }
            else
            {
                $response->setStatusCode(400);
            }
        }

        return $response->setContent(
                        $this->renderView("MembersBundle:List:new.html.twig", array(
                            'form'     => $form->createView(),
                            'member'   => $member,
                            'isNew'    => true,
                            "uploader" => $uploaderHelper
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

//        $voucher = $this->get("member_manager")->getCurrentVoucher($member);
        $voucher = $member->getCurrentVoucher();

        return array(
            "voucher" => $voucher
        );
    }

}
