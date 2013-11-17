<?php

namespace Dende\EntriesBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Response;
use Dende\MembersBundle\Entity\Member;
use Dende\EntriesBundle\Form\EntryType;
use Dende\EntriesBundle\Entity\Entry;

class DefaultController extends Controller {

    /**
     * @Route("/entrance/{id}/new", name="_entrance_add")
     * @ParamConverter("member", class="MembersBundle:Member")
     * @Template()
     */
    public function newEntryAction(Member $member) {
        $request = $this->get('request');

        $response = new Response(
                'Content', 200, array('content-type' => 'text/html')
        );

        $entry = new Entry();

        $form = $this->createForm(new EntryType(), $entry);

        $currentVoucher = $this->get('member_manager')->getCurrentVoucher($member);

        $entry->setMember($member);

        if ($currentVoucher)
        {
            $entry->setVoucher($currentVoucher);
            $amount = $currentVoucher->getAmount();

            if ($amount > 0)
            {
                $amountLeft = $currentVoucher->getAmountLeft();
                $currentVoucher->setAmountLeft($amountLeft - 1);
            }
        }
        else
        {
            $form->remove("entry_type");
        }

        if ($request->getMethod() == 'POST')
        {
            $form->handleRequest($request);

            if ($form->isValid())
            {
                $member->setLastEntry($entry);

                $this->get('entry_manager')->save($entry);
                $this->get('member_manager')->save($member);
                
                if ($currentVoucher)
                {
                    $this->get('voucher_manager')->save($currentVoucher);
                }
            }
            else
            {
                $response->setStatusCode(400);
            }
        }

        return array(
            "form"    => $form->createView(),
            "member"  => $member,
            "voucher" => $currentVoucher
        );
    }

}
