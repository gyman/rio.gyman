<?php

namespace Dende\ListsBundle\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\JsonResponse;
use Dende\ListsBundle\Controller\ListControllerInterface;

/**
 * @Route("/vouchers")
 */
class VouchersController extends Controller implements ListControllerInterface {

    private $listname = "vouchers";

    public function getListname() {
        return $this->listname;
    }

    /**
     * @Route("/", name="_vouchers_list")
     * @Template()
     */
    public function indexAction(Request $request) {
        $filter = $this->get("filter_provider")->getListFilter($this->getListname());
        $filters = $this->get("filter_repository")->getFiltersByListname($this->getListname());

        return array(
            "filter"   => $filter,
            "filters"  => $filters,
            "listname" => $this->getListname()
        );
    }

    /**
     * @Route("/datasource.{_format}", name="_list_vouchers_datasource", defaults={"_format" = "json"}, requirements={"_format" = "json"})
     * @Template()
     */
    public function datasourceAction(Request $request) {
        $vouchersList = $this->get("vouchers_list");
        $data = $vouchersList->getResults();
        return new JsonResponse($data);
    }

}
