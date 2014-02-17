<?php

namespace Dende\VouchersBundle\Entity;

use Doctrine\ORM\EntityRepository;
use Dende\MembersBundle\Entity\Member;
use Doctrine\ORM\QueryBuilder;
use DateTime;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\ORM\Tools\Pagination\Paginator;

class VoucherRepository extends EntityRepository {
// <editor-fold defaultstate="collapsed" desc="class fields">

    /**
     *
     * @var QueryBuilder 
     */
    private $query;

    /**
     *
     * @var Request 
     */
    private $request; // </editor-fold>
    private $columns = array(
        0 => "m.name",
        1 => "v.startDate",
        2 => "v.amount",
        3 => "v.created",
        4 => "v.price",
    );

// <editor-fold defaultstate="collapsed" desc="setters and getters">

    public function getQuery() {
        return $this->query;
    }

    public function getRequest() {
        return $this->request;
    }

    public function setQuery(QueryBuilder $query) {
        $this->query = $query;
    }

    public function setRequest(Request $request) {
        $this->request = $request;
    }

    public function getAllVouchers() {
        return $this->getVouchersQuery()
                        ->orderBy("v.created", "DESC")
                        ->getQuery()->execute();
    }

// </editor-fold>

    /**
     * Get all Vouchers query
     * @return Doctrine\ORM\QueryBuilder
     */
    public function getVouchersQuery() {
        $query = $this->createQueryBuilder("v")->select();
        return $query;
    }

    public function getTotalCount() {
        $query = $this->getVouchersQuery();
        $query->select("count(v.id)");
        return $query->getQuery()->getSingleScalarResult();
    }

    public function getVouchersOverlappingQuery(Member $member, \DateTime $startDate, \DateTime $endDate) {
        $query = $this->getVouchersQuery();
        $query->where("v.member = :member");
        $query->andWhere("v.startDate BETWEEN :start AND :end OR v.endDate BETWEEN :start AND :end");
        $query->setParameters(array(
            "start"  => $startDate,
            "end"    => $endDate,
            "member" => $member
        ));
        $query->orderBy("v.endDate", "DESC");

        return $query;
    }

    public function applyFilterFromRequest() {
        $this->applyLimitFromRequest();
        $this->applyOffsetFromRequest();
        $this->applySearchFromRequest();
        $this->applySortingFromRequest();
    }

    public function getPaginator() {
        return new Paginator($this->getQuery());
    }

    public function applyLimitFromRequest() {
        $limit = $this->getRequest()->get("iDisplayLength", 10);

        if (!$limit)
        {
            return;
        }

        $this->getQuery()->setMaxResults($limit);
    }

    public function applyOffsetFromRequest() {
        $offset = $this->getRequest()->get("iDisplayStart", 0);

        if (!$offset)
        {
            return;
        }

        $this->getQuery()->setFirstResult($offset);
    }

    public function applySearchFromRequest() {
        $search = $this->getRequest()->get("sSearch", null);

        if (!$search)
        {
            return;
        }

        $qb = $this->getQuery();

        $qb->innerJoin("v.member", "m");

        $qb->andWhere($qb->expr()->orX(
                        $qb->expr()->like("m.name", ":string"), $qb->expr()->like("m.barcode", ":string"), $qb->expr()->like("m.notes", ":string")
        ));
        $qb->setParameter("string", "%" . $search . "%");
    }

    public function applySortingFromRequest() {
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
                $this->getQuery()->leftJoin("v.member", "m");
            }

            if ($column === 2)
            {
                $this->getQuery()->leftJoin("m.lastEntry", "e");
            }

            if ($column === 3)
            {
                $this->getQuery()->leftJoin("m.currentVoucher", "v");
            }

            if ($a == 0)
            {
                $this->getQuery()->orderBy($columnName, $order);
            }
            else
            {
                $this->getQuery()->addOrderBy($columnName, $order);
            }
        }
    }

    /**
     * 
     * @param \DateTime $date
     * @param \Dende\MembersBundle\Entity\Member $member
     * @return type
     */
    public function getVoucherActiveForDate(\DateTime $date, Member $member) {
        $query = $this->getVouchersQuery();
        $query->where("v.member = :member");
        $query->andWhere("v.startDate <= :moment");
        $query->andWhere("v.endDate >= :moment");
        $query->setParameters(array(
            "moment" => $date,
            "member" => $member
        ));

        return $query->getQuery()->getOneOrNullResult();
    }

    public function getCurrentVouchers(Member $member) {
        $query = $this->getVouchersQuery();
        $query->where("v.member = :member");
        $query->andWhere("v.startDate is null OR v.startDate < :moment");
        $query->andWhere("v.endDate is null OR v.endDate > :moment");
        $query->andWhere("v.amountLeft > 0 OR v.amountLeft is null");
        $query->setParameters(array(
            "moment" => new DateTime(),
            "member" => $member
        ));

        return $query->getQuery()->getOneOrNullResult();
    }

}
