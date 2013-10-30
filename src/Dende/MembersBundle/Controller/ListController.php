<?php

namespace Dende\MembersBundle\Controller;

use Dende\MembersBundle\Entity\Member;
use Dende\MembersBundle\Form\MemberType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;

class ListController extends Controller {

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
        $memberManager = $this->get("member_manager");
        $members = $memberManager->getMembers();

        return array("members" => $members);
    }

    /**
     * @Route("/{id}/edit", name="_member_edit")
     * @Template()
     */
    public function editAction($id) {
        $request = $this->get('request');

        $memberManager = $this->get("member_manager");
        $member = $memberManager->getById($id);
        $form = $this->createForm(new MemberType($this->container->get('oneup_uploader.templating.uploader_helper')), $member);

        if ($request->getMethod() == 'POST')
        {
            $form->handleRequest($request);

            if ($form->isValid())
            {
//                $memberManager->handleFotoUpload($form, $member, $this->container->getParameter("upload_dir"));
                $memberManager->persist($member);
                $memberManager->flush();
            }
        }

        return array(
            'form'   => $form->createView(),
            'member' => $member
        );
    }

}
