<?php

namespace Dende\FiltersBundle\Services;

use Dende\FiltersBundle\Entity\Filter;
use Symfony\Component\HttpFoundation\Session\Session;
use Doctrine\ORM\QueryBuilder;
use Dende\FiltersBundle\Filters\Subfilter;

class FilterProvider {

    private $session;
    private $filters;
    private $filtersPerLists;

    public function getFilters() {
        return $this->filters;
    }

    public function setFilters($filters) {
        $this->filters = $filters;
    }

    public function addFilter($filter) {
        $this->filters[$filter->getName()] = $filter;
    }

    public function addFilterForList($filter,$list) {
        $this->filtersPerLists[$list][$filter->getName()] = $filter;
    }
    
    public function getFiltersForList($list) {
        return $this->filtersPerLists[$list];
    }    

    public function getFilter($filter) {
        return $this->filters[$filter];
    }

    public function getSession() {
        return $this->session;
    }

    public function setSession($session) {
        $this->session = $session;
    }

    public function setListFilter(Filter $filter, $list) {
        $this->getSession()->set("filters[$list]", $filter);
    }

    /**
     * 
     * @return Filter
     */
    public function getListFilter($list) {
        return $this->getSession()->get("filters[$list]");
    }

    public function getFilterType($name) {
        $type = 'Dende\\FiltersBundle\\Form\\Subfilters\\' . ucfirst($name) . 'Type';
        return new $type();
    }

    public function getTemplateName($name) {
        return "FiltersBundle:Subfilters:" . $name . ".html.twig";
    }

    public function applyFilterToQuery(Filter $filter, QueryBuilder $query) {
        $subfilters = $this->getSubfiltersFromFilter($filter);
        if (count($subfilters) > 0)
        {
            foreach ($subfilters as $subfilter) {
                $subfilter->applyToQuery($query);
            }
        }
    }

    private function getSubfiltersFromFilter(Filter $filter) {
        $result = array();
        $filtersSerialized = $filter->getFilter();
        $filters = json_decode($filtersSerialized, true);

        if (count($filters) > 0)
        {
            foreach ($filters as $name => $options) {
                $filter = $this->getFilter($name);
                $filter->setOptions($options);
                $result[] = $filter;
            }
        }

        return $result;
    }

}