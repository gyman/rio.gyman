<?php

namespace Dende\MembersBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

/**
 * @Route("/list")
 */
class ListController extends Controller {

    /**
     * @Route("/", name="_members_list")
     * @Template()
     */
    public function indexAction() {
        $memberManager = $this->get("member_manager");
        $members = $memberManager->getMembers();
        return array("members" => $members);
    }

}
