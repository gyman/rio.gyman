<?php

namespace Dende\ListsBundle\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\JsonResponse;

/**
 * @Route("/vouchers")
 */
class VouchersController extends Controller {

    private $listname = "vouchers";
    private $list_tr_partial = "ListsBundle:Vouchers:_list_tr.html.twig";

    /**
     * @Route("/", name="_vouchers_list")
     * @Template()
     */
    public function indexAction(Request $request) {
        $filter = $this->get("filter_provider")->getListFilter($this->listname);

        if ($request->getRequestFormat() == "json")
        {
            $repository = $this->get("voucher_repository");
            $listParameters = $this->get("list_parameters");
            $query = $repository->getQuery();

            if ($filter)
            {
                $query->innerJoin("v.member", "m");
                $query->leftJoin("m.currentVoucher", "cv");
                $this->get("filter_provider")->applyFilterToQuery($filter, $query);
            }

            $totalCount = $repository->getTotalCount();

            $listParameters->setColumns($repository->getSortingColumns());
            $listParameters->applyRequest($query);

            $paginator = $repository->getPaginator($query);

            $displayedCount = count($paginator);

            $datatable = array(
                "sEcho"                => $request->get("sEcho"),
                "iTotalRecords"        => $totalCount,
                "iTotalDisplayRecords" => $displayedCount,
                "aaData"               => array()
            );

            if ($displayedCount == 0)
            {
                return new JsonResponse($datatable);
            }

            foreach ($paginator as $voucher) {
                $datatable["aaData"][] = array(
                    $this->renderView($this->list_tr_partial, array("voucher" => $voucher)),
                    null,
                    null,
                    null,
                    null,
                    null,
                );
            }

            return new JsonResponse($datatable);
        }

        $filters = $this->get("filter_repository")->getFilters();

        return array(
            "filter"   => $filter,
            "filters"  => $filters,
            "listname" => $this->listname
        );
    }

}
