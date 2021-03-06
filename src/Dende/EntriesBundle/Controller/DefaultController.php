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
use Symfony\Component\HttpFoundation\JsonResponse;

class DefaultController extends Controller {

    /**
     * @Route("/quick/member/{barcode}", name="_entry_quickadd")
     * @ParamConverter("member", class="MembersBundle:Member")
     */
    public function quickSearchAction(Member $member) {
        return $this->forward("EntriesBundle:Default:new", array("id" => $member->getId()));
    }

    /**
     * @Route("/new/member/{id}", name="_entrance_add")
     * @ParamConverter("member", class="MembersBundle:Member")
     * @Template()
     */
    public function newAction(Member $member) {
        $request = $this->get('request');

        $response = new Response(
                'Content', 200, array('content-type' => 'text/html')
        );

        $entry = $this->get('entry_manager')->createNewEntry();
        $entry->setMember($member);

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
                if ($form["entryType"]->getData() != "voucher")
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

        return $response->setContent(
                        $this->renderView("EntriesBundle:Default:new.html.twig", array(
                            "form"          => $form->createView(),
                            "member"        => $member,
                            "voucher"       => $currentVoucher,
                            "currentEvents" => $this->getDoctrine()->getRepository("ScheduleBundle:Event")->getCurrentEvents()
                                )
                        )
        );
    }

    /**
     * @Route("/{id}/delete", name="_entry_delete")
     * @ParamConverter("entry", class="EntriesBundle:Entry")
     * @Template()
     */
    public function deleteAction(Entry $entry) {
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->remove($entry);
        $entityManager->flush();
        return new JsonResponse(array("status" => "ok"));
    }

}
