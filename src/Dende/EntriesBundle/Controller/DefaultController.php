<?php

namespace Dende\EntriesBundle\Controller;

use Dende\MembersBundle\Entity\Member;
use Dende\EntriesBundle\Form\EntryType;
use Dende\EntriesBundle\Entity\Entry;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Response;

class DefaultController extends Controller {

    /**
     * @Route("/entrance/new/member/{id}", name="_entrance_add")
     * @ParamConverter("member", class="MembersBundle:Member")
     * @Template()
     */
    public function newAction(Member $member) {
        $request = $this->get('request');

        $response = new Response(
                'Content', 200, array('content-type' => 'text/html')
        );

        $entry = new Entry();
//        $currentVoucher = $this->get('member_manager')->getCurrentVoucher($member);
        $currentVoucher = $member->getCurrentVoucher();

        if ($currentVoucher)
        {
            $entry->setVoucher($currentVoucher);
        }
        
        $entryType = new EntryType($this->get("event_repository"), $this->get("activity_repository"));
        $form = $this->createForm($entryType, $entry);

        if ($request->getMethod() == 'POST')
        {
            $form->handleRequest($request);

            if ($form->isValid())
            {
                if($form["entryType"]->getData() != "voucher")
                {
                    $entry->setVoucher(null);
                }
                
                $this->get('entry_manager')->save($entry);
            }
            else
            {
                $response->setStatusCode(400);
            }
        }

        return array(
            "form"          => $form->createView(),
            "member"        => $member,
            "voucher"       => $currentVoucher,
            "currentEvents" => $this->getDoctrine()->getRepository("ScheduleBundle:Event")->getCurrentEvents()
        );
    }

}
