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
     * @Template()
     */
    public function indexAction() {
        $memberManager = $this->get("member_manager");
        $members = $memberManager->getMembers();
        
        return array("members" => $members);
    }

    /**
     * @Route("/{id}/edit", name="_member_edit")
     * @Method({"GET","POST"})
     * @Template()
     */
    public function editAction($id) {
        $request = $this->get('request');

        $memberManager = $this->get("member_manager");
        $member = $memberManager->getById($id);
        $form = $this->createForm(new MemberType, $member);

        if ($request->getMethod() == 'POST')
        {
            $form->bindRequest($request);

            if ($form->isValid())
            {
                $memberManager->persist($member);
                $memberManager->flush();
            }
        }

        return array(
            'form' => $form->createView(),
            'member' => $member
        );
    }

}
