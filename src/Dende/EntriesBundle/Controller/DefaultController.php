<?php

namespace Dende\EntriesBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Dende\MembersBundle\Entity\Member;
use Dende\EntriesBundle\Form\EntryType;
use Dende\EntriesBundle\Entity\Entry;

class DefaultController extends Controller {
    /**
     * @Route("/entrance/{id}/new", name="_entrance_add")
     * @ParamConverter("member", class="MembersBundle:Member")
     * @Template()
     */
    public function newAction(Member $member) {
        $entry = new Entry();
        
        $form = $this->createForm(new EntryType(), $entry);
        
        $currentVoucher = $this->get('member_manager')->getCurrentVoucher($member);
        
        return array(
            "form" => $form->createView(),
            "member" => $member,
            "voucher" => $currentVoucher
        );
    }

}
