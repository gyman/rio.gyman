<?php

namespace Dende\ListsBundle\Services;

use Dende\ListsBundle\Services\AbstractList;
use Doctrine\ORM\QueryBuilder;

class EntriesList extends AbstractList {

    protected $listname = "entries";
    protected $listTrPartial = "ListsBundle:Entries:_list_tr.html.twig";
    protected $columnsCount = 0;
    protected $sortingColumns = array();

    protected function addJoins(QueryBuilder $query) {
        
    }

    public function getSortingFunction($sortingColumnsCount, $sortingColumnArray, $sortingOrderArray) {

        /**
         * @var Closure
         */
        return function(QueryBuilder $query) use ($sortingColumnsCount, $sortingColumnArray, $sortingOrderArray) {
            
        };
    }

}
