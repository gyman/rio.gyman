<?php

namespace Dende\MembersBundle\Controller;

use Dende\MembersBundle\Entity\Member;
use Dende\MembersBundle\Form\MemberType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Dende\MembersBundle\Services\Manager\MemberManager;
use Dende\MembersBundle\Form\FilterType;
use Symfony\Component\HttpFoundation\JsonResponse;
use Dende\MembersBundle\Entity\Filter;
use Dende\MembersBundle\Form\Subfilters as Subfilters;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\HttpFoundation\Session\Session;

class ListController extends Controller {

    public static $filter_session_key = "members_list_filter";

    /**
     * @Route("/list", name="_members_list")
     * @Template("MembersBundle:List:list.html.twig")
     */
    public function indexAction(Request $request) {
        $session = new Session();
        $filter = $session->get(self::$filter_session_key);

        if ($request->getRequestFormat() == "json")
        {
            /** @var MemberRepository */
            $memberRepository = $this->get("member_repository");
            $membersQuery = $memberRepository->getMembersQuery();

            $memberRepository->setRequest($request);
            $memberRepository->setQuery($membersQuery);

            if ($filter)
            {
                $this->get("filter_manager")->applyFilterToQuery($filter, $membersQuery);
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
                    null,
                );
            }

            return new JsonResponse($datatable);
        }

        $filters = $this->get("member_filter_repository")->getFilters();

        return array(
            "filter"  => $filter,
            "filters" => $filters
        );
    }

    /**
     * @Route("/filter/{id}/delete", name="_members_list_filter_delete")
     * @ParamConverter("filter", class="MembersBundle:Filter")
     */
    public function deleteFilterAction(Filter $filter, Request $request) {
        $session = new Session();
        $filterInSession = $session->get(self::$filter_session_key);

        if ($filterInSession && $filter->getId() == $filterInSession->getId())
        {
            $session->remove(self::$filter_session_key);
        }

        $em = $this->getDoctrine()->getManager();

        $em->remove($filter);
        $em->flush();

        if ($request->isXmlHttpRequest())
        {
            return new JsonResponse(array("status" => "ok"));
        }

        return $this->redirect($this->generateUrl("_members_list"));
    }

    /**
     * @Route("/filter/reset", name="_members_list_filter_reset")
     */
    public function resetFilterAction(Request $request) {
        $session = new Session();
        $session->remove(self::$filter_session_key);

        if ($request->isXmlHttpRequest())
        {
            return new JsonResponse(array("status" => "ok"));
        }

        return $this->redirect($this->generateUrl("_members_list"));
    }

    /**
     * @Route("/filter/{id}/set", name="_members_list_filter_set")
     * @ParamConverter("filter", class="MembersBundle:Filter")
     */
    public function setFilterAction(Filter $filter, Request $request) {
        $session = new Session();
        $session->set(self::$filter_session_key, $filter);

        if ($request->isXmlHttpRequest())
        {
            return new JsonResponse(array("status" => "ok"));
        }

        return $this->redirect($this->generateUrl("_members_list"));
    }

    /**
     * @Route("/filter/new", name="_members_filter")
     * @Template("MembersBundle:List:filter.html.twig")
     */
    public function newFilterAction(Request $request) {
        $response = new Response(
                'Content', 200, array('content-type' => 'text/html')
        );

        $filter = new Filter();

        $form = $this->createForm(new FilterType(), $filter);

        $subformNamePattern = $form->getName() . "_subfilters";

        $filterParams = $request->get($subformNamePattern);

        if ($request->getMethod() == 'POST')
        {
            $form->handleRequest($request);
            $filter->setFilter(json_encode($filterParams));

            $data = array();

            if ($form->get("save")->getData() === true)
            {
                if ($form->isValid())
                {
                    $manager = $this->getDoctrine()->getManager();
                    $manager->persist($filter);
                    $manager->flush();
                }
                else
                {
                    $response->setStatusCode(400);
                }

                $data = array(
                    "name" => $filter->getName(),
                    "id"   => $filter->getId()
                );
            }

            $session = new Session();
            $session->set(self::$filter_session_key, $filter);

            return new JsonResponse(array(
                "status" => "ok",
                "data"   => $data
            ));
        }

        return $response->setContent(
                        $this->renderView("MembersBundle:List:filter.html.twig", array(
                            'form' => $form->createView(),
                        ))
        );
    }

    /**
     * @Route("/filter/{name}", name="_members_filter_get")
     * @Template()
     */
    public function getSubfilterAction($name) {
        $typeClass = 'Dende\\MembersBundle\\Form\\Subfilters\\' . ucfirst($name) . 'Type';

        $form = $this->createForm(new $typeClass());

        return new Response($this->renderView("MembersBundle:List:Subfilters/" . $name . ".html.twig", array(
                    "form"   => $form->createView(),
                    "widget" => $name
        )));
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
    public function newAction() {
        $request = $this->get('request');
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
        $memberManager = $this->get("member_manager");
        $memberManager->delete($member);
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
