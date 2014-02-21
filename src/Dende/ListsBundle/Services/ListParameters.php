<?php

namespace Dende\ListsBundle\Services;

use Doctrine\ORM\QueryBuilder;
use Symfony\Component\HttpFoundation\Request;

class ListParameters {
// <editor-fold defaultstate="collapsed" desc="fields">

    /**
     *
     * @var Request 
     */
    private $request;

    /**
     *
     * @var array 
     */
    private $columns;

// </editor-fold>

    public function __construct(Request $request) {
        $this->setRequest($request);
    }

// <editor-fold defaultstate="collapsed" desc="setters and getters">
    public function setColumns($columns) {
        $this->columns = $columns;
    }

    public function getRequest() {
        return $this->request;
    }

    public function setRequest(Request $request) {
        $this->request = $request;
    }

// </editor-fold>

    public function applyRequest(QueryBuilder $query) {
        $this->applyLimit($query);
        $this->applyOffset($query);
        $this->applySearch($query);
        $this->applySort($query);
    }

    public function applyLimit(QueryBuilder $query) {
        $limit = $this->getRequest()->get("iDisplayLength", 10);

        if (!$limit)
        {
            return;
        }

        $query->setMaxResults($limit);
    }

    public function applyOffset(QueryBuilder $query) {
        $offset = $this->getRequest()->get("iDisplayStart", 0);

        if (!$offset)
        {
            return;
        }

        $query->setFirstResult($offset);
    }

    public function applySearch(QueryBuilder $qb) {
        $search = $this->getRequest()->get("sSearch", null);

        if (!$search)
        {
            return;
        }

        $qb->andWhere($qb->expr()->orX(
                        $qb->expr()->like("m.name", ":string"), $qb->expr()->like("m.barcode", ":string"), $qb->expr()->like("m.notes", ":string")
        ));
        $qb->setParameter("string", "%" . $search . "%");
    }

    public function applySort(QueryBuilder $query) {
        $sortingColumnsCount = (int) $this->getRequest()->get("iSortingCols", 0);

        if ($sortingColumnsCount == 0)
        {
            return;
        }

        for ($a = 0; $a < $sortingColumnsCount; $a++) {
            $column = (int) $this->getRequest()->get("iSortCol_" . $a, 0);
            $order = strtoupper($this->getRequest()->get("sSortDir_" . $a, "asc"));

            if (!key_exists($column, $this->columns))
            {
                continue;
            }

            $columnName = $this->columns[$column];

            if ($column === 0)
            {
                $select = "(case "
                        . "when m.belt = 'blue' then 1 "
                        . "when m.belt = 'purple' then 2 "
                        . "when m.belt = 'brown' then 3 "
                        . "when m.belt = 'black' then 4 "
                        . "else 0 end) as HIDDEN beltN";

                $query->addSelect($select);
            }

            if ($column === 2)
            {
                $query->leftJoin("m.lastEntry", "e");
            }

            if ($column === 3)
            {
                $query->leftJoin("m.currentVoucher", "v");
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
    }

}
