<?php

namespace Dende\EntriesBundle\Controller;

use Dende\MembersBundle\Entity\Member;
use Dende\EntriesBundle\Form\EntryType;
use Dende\EntriesBundle\Entity\Entry;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\Response;

class ListController extends Controller {

    /**
     * @Route("/list", name="_entries_list")
     * @Template()
     */
    public function indexAction() {

        $entryRepository = $this->get("entry_repository");

        $entries = $entryRepository->getAllEntries();
        
        return array(
            "entries" => $entries
        );
    }

}
