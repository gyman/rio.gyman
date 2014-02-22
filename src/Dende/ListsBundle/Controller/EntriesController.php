<?php

namespace Dende\ListsBundle\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

/**
 * @Route("/entries")
 */
class EntriesController extends Controller {

    private $listname = "entries";
    private $list_tr_partial = "ListsBundle:Entries:_list_tr.html.twig";

    /**
     * @Route("/", name="_list_entries")
     * @Template()
     */
    public function indexAction(Request $request) {
        $filter = $this->get("filter_provider")->getListFilter($this->listname);

        if ($request->getRequestFormat() == "json")
        {
            $repository = $this->get("entry_repository");
            $query = $repository->getQuery();

            $repository->setRequest($request);
            $repository->setQuery($query);

            if ($filter)
            {
//                $query->join("m.vouchers", "v");
//                $query->join("m.entries", "e");
//                $query->join("e.activity", "a");

                $this->get("filter_provider")->applyFilterToQuery($filter, $query);
            }

            $totalCount = $repository->getTotalCount();

            $repository->applyFilterFromRequest();

            $paginator = $repository->getPaginator();

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

            foreach ($paginator as $entity) {
                $datatable["aaData"][] = array(
                    $this->renderView($this->list_tr_partial, array("entity" => $entity)),
                    null,
                    null,
                    null,
                );
            }

            return new JsonResponse($datatable);
        }

        $filters = $this->get("filter_repository")->getFilters();

        return array(
            "filter"  => $filter,
            "filters" => $filters
        );
    }

}
