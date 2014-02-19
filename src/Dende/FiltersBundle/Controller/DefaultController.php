<?php

namespace Dende\FiltersBundle\Controller;

use Dende\FiltersBundle\Entity\Filter;
use Dende\FiltersBundle\Form\Subfilters as Subfilters;
use Dende\FiltersBundle\Form\FilterType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;

class DefaultController extends Controller {

    public static $filter_session_key = "members_list_filter";

    /**
     * @Route("/{id}/delete", name="_filter_delete")
     * @ParamConverter("filter", class="FiltersBundle:Filter")
     */
    public function deleteFilterAction(Filter $filter, Request $request) {
        $session = $request->getSession();
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
     * @Route("/reset", name="_filter_reset")
     */
    public function resetFilterAction(Request $request) {
        $session = $request->getSession();
        $session->remove(self::$filter_session_key);

        if ($request->isXmlHttpRequest())
        {
            return new JsonResponse(array("status" => "ok"));
        }

        return $this->redirect($this->generateUrl("_members_list"));
    }

    /**
     * @Route("/{id}/{listname}/set", name="_filter_set")
     * @ParamConverter("filter", class="FiltersBundle:Filter")
     */
    public function setFilterAction(Filter $filter, Request $request, $listname) {
        $filterProvider = $this->get("filter_provider");

        $filterProvider->setListFilter($filter, $listname);

        if ($request->isXmlHttpRequest())
        {
            return new JsonResponse(array("status" => "ok"));
        }

        return $this->redirect($this->generateUrl("_members_list"));
    }

    /**
     * @Route("/new/{listname}", name="_filter_new", requirements={"listname" = "(members|vouchers|entries)"})
     * @Template("FiltersBundle::filter.html.twig")
     */
    public function newFilterAction(Request $request, $listname) {
        $response = new Response(
                'Content', 200, array('content-type' => 'text/html')
        );

        $filter = new Filter();
        
        $filters = $this->get("filter_provider")->getFiltersForList($listname);
        
        $form = $this->createForm(new FilterType($filters), $filter);

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

            $session = $request->getSession();
            $session->set(self::$filter_session_key, $filter);

            return new JsonResponse(array(
                "status" => "ok",
                "data"   => $data
            ));
        }

        return $response->setContent(
                        $this->renderView("FiltersBundle::filter.html.twig", array(
                            'form' => $form->createView(),
                            'listname' => $listname
                        ))
        );
    }

    /**
     * @Route("/{name}", name="_filter_get")
     * @Template()
     */
    public function getSubfilterAction($name) {
        $type = $this->get("filter_provider")->getFilterType($name);
        $templateName = $this->get("filter_provider")->getTemplateName($name);

        $form = $this->createForm($type);

        return new Response($this->renderView($templateName, array(
                    "form"   => $form->createView(),
                    "widget" => $name
        )));
    }

}
