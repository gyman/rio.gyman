<?php

namespace Dende\MembersBundle\Controller;

use Dende\MembersBundle\Entity\Member;
use Dende\MembersBundle\Form\MemberType;
use Dende\MembersBundle\Services\Manager\MemberManager;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\Common\Collections\ArrayCollection;

class ListController extends Controller {

    /**
     * @Route("/list", name="_members_list")
     * @Template("MembersBundle:List:list.html.twig")
     */
    public function indexAction(Request $request) {
        $filter = $this->get("filter_provider")->getListFilter("member");

        if ($request->getRequestFormat() == "json")
        {
            
            // @TODO: gruby refaktor potrzebny :/
            
            /** @var MemberRepository */
            $memberRepository = $this->get("member_repository");
            $membersQuery = $memberRepository->getMembersQuery();

            $memberRepository->setRequest($request);
            $memberRepository->setQuery($membersQuery);

            if ($filter)
            {
                $this->get("filter_provider")->applyFilterToQuery($filter, $membersQuery);
            }

            $totalCount = $memberRepository->getTotalCount();

            $memberRepository->applyFilterFromRequest();

            $paginator = $memberRepository->getPaginator();

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

            foreach ($paginator as $member) {
                $datatable["aaData"][] = array(
                    $this->renderView("MembersBundle:List:_list_tr.html.twig", array("member" => $member)),
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

    /**
     * @Route("/gallery", name="_members_gallery")
     * @Template("MembersBundle:List:gallery.html.twig")
     */
    public function galleryAction(Request $request) {
        $memberManager = $this->get("member_manager");
        $members = $memberManager->getMembers();

        return array("members" => $members);
    }

    /**
     * @Route("/{id}/edit", name="_member_edit")
     * @ParamConverter("member", class="MembersBundle:Member")
     * @Template()
     */
    public function editAction(Member $member, Request $request) {
        $response = new Response(
                'Content', 200, array('content-type' => 'text/html')
        );

        /** @var MemberManager Description */
        $memberManager = $this->get("member_manager");

        $uploaderHelper = $this->container->get('oneup_uploader.templating.uploader_helper');

        $form = $this->createForm(new MemberType($uploaderHelper), $member);

        if ($request->getMethod() == 'POST')
        {
            $form->handleRequest($request);

            if ($form->isValid())
            {
                $memberManager->persist($member);
                $memberManager->flush();
            }
            else
            {
                $response->setStatusCode(400);
            }
        }

        $voucher = $memberManager->getCurrentVoucher($member);

        return $response->setContent(
                        $this->renderView("MembersBundle:List:edit.html.twig", array(
                            'form'     => $form->createView(),
                            'member'   => $member,
                            'voucher'  => $voucher,
                            "uploader" => $uploaderHelper,
                                )
                        )
        );
    }

    /**
     * @Route("/new", name="_member_new")
     * @Template()
     */
    public function newAction(Request $request) {
        $response = new Response(
                'Content', 200, array('content-type' => 'text/html')
        );

        $member = new Member();
        $uploaderHelper = $this->container->get('oneup_uploader.templating.uploader_helper');
        $form = $this->createForm(new MemberType($uploaderHelper), $member);
        $memberManager = $this->get("member_manager");

        if ($request->getMethod() == 'POST')
        {
            $form->handleRequest($request);

            if ($form->isValid())
            {
                $memberManager->save($member);

                $request->getSession()->getFlashBag()->add('notice', 'Dodano nowego użytkownika!');
            }
            else
            {
                $response->setStatusCode(400);
            }
        }

        return $response->setContent(
                        $this->renderView("MembersBundle:List:new.html.twig", array(
                            'form'     => $form->createView(),
                            'member'   => $member,
                            'isNew'    => true,
                            "uploader" => $uploaderHelper
                                )
                        )
        );
    }

    /**
     * @Route("/{id}/delete", name="_member_delete")
     * @ParamConverter("member", class="MembersBundle:Member")
     * @Template()
     */
    public function deleteAction(Member $member) {
        $this->get("member_manager")->delete($member);
        return array();
    }

    /**
     * @Route("/{id}/details", name="_member_details")
     * @ParamConverter("member", class="MembersBundle:Member")
     */
    public function detailsAction(Member $member) {
        return new JsonResponse(array(
            "data" => $this->renderView("MembersBundle:List:_list_tr_details.html.twig", array(
                "member" => $member))
        ));
    }

}
