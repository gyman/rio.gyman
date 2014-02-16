<?php

namespace Dende\DashboardBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

class DefaultController extends Controller {

    /**
     * @Route("/dashboard", name="_dashboard")
     * @Template("DashboardBundle:Default:index.html.twig")
     * @todo Przenieść do osobnego bundle'a
     */
    public function indexAction() {
        $pinnedFilters = $this->get("member_filter_repository")->getPinnedFilters();
        $events = $this->get("event_repository")->getTodayEvents();

        return array(
            "filters" => $pinnedFilters,
            "events" => $events
        );
    }

}
