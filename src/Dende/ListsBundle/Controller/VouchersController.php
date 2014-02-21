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
class VouchersController extends DefaultController {

    /**
     * @Route("/", name="_voucher_list")
     * @Template()
     */
    public function indexAction(Request $request) {
//        $session = new Session();
//        $filter = $session->get(self::$filter_session_key);

        if ($request->getRequestFormat() == "json")
        {
            /** @var MemberRepository */
            $voucherRepository = $this->get("voucher_repository");
            $vouchersQuery = $voucherRepository->getVouchersQuery();

            $voucherRepository->setRequest($request);
            $voucherRepository->setQuery($vouchersQuery);

//            if ($filter)
//            {
//                $this->get("filter_manager")->applyFilterToQuery($filter, $vouchersQuery);
//            }

            $totalCount = $voucherRepository->getTotalCount();

            $voucherRepository->applyFilterFromRequest();

            $paginator = $voucherRepository->getPaginator();

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
                    $this->renderView("ListsBundle:Vouchers:_list_tr.html.twig", array("voucher" => $voucher)),
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                );
            }

            return new JsonResponse($datatable);
        }

//        $filters = $this->get("voucher_filter_repository")->getFilters();

        return array(
//            "filter"  => $filter,
//            "filters" => $filters
        );
    }

}
