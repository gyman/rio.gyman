<?php

namespace Dende\DefaultBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

class DefaultController extends Controller {
    
    /**
     * @Route("/", name="_default_index")
     */
    public function indexAction() {
        return $this->forward("MembersBundle:List:index");
    }

    /**
     * @Template()
     */
    public function menuAction() {
        return array();
    }


}
