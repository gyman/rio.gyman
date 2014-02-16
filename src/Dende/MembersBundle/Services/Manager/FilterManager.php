<?php

namespace Dende\MembersBundle\Services\Manager;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\QueryBuilder;
use Dende\MembersBundle\Entity\Filter;
use Dende\MembersBundle\Filters as Subfilters;

class FilterManager {

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
        $subfiltersSerialized = $filter->getFilter();
        $subfilters = json_decode($subfiltersSerialized, true);

        if (count($subfilters) > 0)
        {
            foreach ($subfilters as $name => $config) {
                $class = 'Dende\\MembersBundle\\Filters\\'. ucfirst($name);
                $result[] = new $class($config);
            }
        }

        return $result;
    }

}
