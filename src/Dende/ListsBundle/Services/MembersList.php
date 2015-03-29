<?php

namespace Dende\ListsBundle\Services;

use Dende\ListsBundle\Services\AbstractList;
use Doctrine\ORM\QueryBuilder;

class MembersList extends AbstractList {

    protected $listname = "members";
    protected $listTrPartial = "ListsBundle:Members:_list_tr.html.twig";
    protected $columnsCount = 4;
    protected $sortingColumns = array(
        0 => "beltN",
        1 => "m.name",
        2 => "cv.endDate"
    );

    protected function addJoins(QueryBuilder $query) {
        $query->leftJoin("m.vouchers", "v");
        $query->leftJoin("m.currentVoucher", "cv");
        $query->leftJoin("m.entries", "e");
        $query->leftJoin("e.activity", "a");
    }

    public function getSortingFunction($sortingColumnsCount, $sortingColumnArray, $sortingOrderArray) {

        /**
         * @var Closure
         */
        return function(QueryBuilder $query) use ($sortingColumnsCount, $sortingColumnArray, $sortingOrderArray) {


            if ($sortingColumnsCount == 0)
            {
                return;
            }

            for ($a = 0; $a < $sortingColumnsCount; $a++) {
                $column = (int) $sortingColumnArray[$a];
                $order = strtoupper($sortingOrderArray[$a]);

                if (!key_exists($column, $this->sortingColumns))
                {
                    continue;
                }

                $columnName = $this->sortingColumns[$column];

                if ($column === 0)
                {
                    $select = "(case "
                            . "when m.belt = 'blue' then 3 "
                            . "when m.belt = 'purple' then 4 "
                            . "when m.belt = 'brown' then 5 "
                            . "when m.belt = 'black' then 6 "
                            . "when m.belt = 'white-x' then 2 "
			    . "when m.belt = 'mma' then 0 "
                            . "else 1 end) as HIDDEN beltN";

                    $query->addSelect($select);
                }

                if ($a == 0)
                {
                    $query->orderBy($columnName, $order);
                }
                else
                {
                    $query->addOrderBy($columnName, $order);
                }
            }
        };
    }

}
