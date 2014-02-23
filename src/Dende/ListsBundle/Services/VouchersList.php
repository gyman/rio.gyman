<?php

namespace Dende\ListsBundle\Services;

use Dende\ListsBundle\Services\AbstractList;
use Doctrine\ORM\QueryBuilder;

class VouchersList extends AbstractList {

    protected $listname = "vouchers";
    protected $listTrPartial = "ListsBundle:Vouchers:_list_tr.html.twig";
    protected $columnsCount = 0;
    protected $sortingColumns = array(
        0 => "m.name",
        1 => "v.startDate",
        2 => "v.amount",
        3 => "v.created",
        4 => "v.price",
    );

    protected function addJoins(QueryBuilder $query) {
        $query->innerJoin("v.member", "m");
    }

    public function getSortingFunction($sortingColumnsCount, $sortingColumnArray, $sortingOrderArray) {

        /**
         * @var Closure
         */
        return function(QueryBuilder $query) use ($sortingColumnsCount, $sortingColumnArray, $sortingOrderArray) {
            
        };
    }

}
