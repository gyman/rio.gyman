<?php

namespace Dende\DefaultBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Dende\DefaultBundle\Services\MenuService;

class DefaultController extends Controller {
    /**
     * @Template()
     */
    public function menuAction() {
        return array();
    }

}
