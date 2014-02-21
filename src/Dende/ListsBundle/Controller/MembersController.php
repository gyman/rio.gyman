<?php

namespace Dende\ListsBundle\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Dende\MembersBundle\Entity\Member;

/**
 * @Route("/members")
 */
class MembersController extends DefaultController {

    private $listname = "members";
    private $list_tr_partial = "ListsBundle:Members:_list_tr.html.twig";

    /**
     * @Route("/", name="_list_members")
     * @Template()
     */
    public function indexAction(Request $request) {
        $filter = $this->get("filter_provider")->getListFilter($this->listname);

        if ($request->getRequestFormat() == "json")
        {
            /** @var MemberRepository */
            $repository = $this->get("member_repository");
            $query = $repository->getQuery();

//            $repository->setRequest($request);

            if ($filter)
            {
                $query->join("m.vouchers", "v");
                $query->join("m.entries", "e");
                $query->join("e.activity", "a");

                $this->get("filter_provider")->applyFilterToQuery($filter, $query);
            }

            $totalCount = $repository->getTotalCount();

            $this->get("list_parameters")->setColumns(array(
                0 => "beltN",
                1 => "m.name",
                2 => "e.created",
            ));
            $this->get("list_parameters")->applyRequest($query);

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

            foreach ($paginator as $entity) {
                $datatable["aaData"][] = array(
                    $this->renderView($this->list_tr_partial, array("member" => $entity)),
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

    /**
     * @Route("/gallery", name="_list_members_gallery")
     * @Template("ListsBundle:Members:gallery.html.twig")
     */
    public function galleryAction(Request $request) {
        $memberManager = $this->get("member_manager");
        $members = $memberManager->getMembers();

        return array("members" => $members);
    }

    /**
     * @Route("/member/{id}/details", name="_list_members_details")
     * @ParamConverter("member", class="MembersBundle:Member")
     */
    public function detailsAction(Member $member) {
        return new JsonResponse(array(
            "data" => $this->renderView("ListsBundle:Members:_list_tr_details.html.twig", array(
                "member" => $member))
        ));
    }

}
