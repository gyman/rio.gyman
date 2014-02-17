<?php

// <editor-fold defaultstate="collapsed" desc="namespace related">

namespace Dende\VouchersBundle\Controller;

use Dende\MembersBundle\Entity\Member;
use Dende\VouchersBundle\Entity\Voucher;
use Dende\VouchersBundle\Form\VoucherType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Dende\VouchersBundle\Exception\VoucherManagerException;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\HttpFoundation\JsonResponse;

// </editor-fold>

class ListController extends Controller {

    public static $filter_session_key = "vouchers_list_filter";

    /**
     * @Route("/list", name="_voucher_list")
     * @Template()
     */
    public function indexAction(Request $request) {
        $session = new Session();
        $filter = $session->get(self::$filter_session_key);

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
                    $this->renderView("VouchersBundle:List:_list_tr.html.twig", array("voucher" => $voucher)),
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

    /**
     * @Route("/{id}/delete", name="_voucher_remove")
     * @ParamConverter("voucher", class="VouchersBundle:Voucher")
     * @Template()
     */
    public function deleteAction(Voucher $voucher, Request $request) {
        $em = $this->getDoctrine()->getManager();

        $member = $voucher->getMember();
        $currentVoucher = $member->getCurrentVoucher();
        
        if($currentVoucher && $currentVoucher->getId() == $voucher->getId())
        {
            $member->setCurrentVoucher(null);
        }
        
        $em->persist($member);
        $em->remove($voucher);
        $em->flush();

        if ($request->isXmlHttpRequest())
        {
            return new JsonResponse(array("status" => "ok"));
        }

        return $this->redirect($this->generateUrl("_voucher_list"));
    }

    
}
