<?php

namespace Dende\VouchersBundle\Entity;

use Doctrine\ORM\EntityRepository;
use Dende\MembersBundle\Entity\Member;
use Doctrine\ORM\QueryBuilder;
use DateTime;

class VoucherRepository extends EntityRepository {

    /**
     * Get all Vouchers query
     * @return Doctrine\ORM\QueryBuilder
     */
    public function getVouchersQuery() {
        $query = $this->createQueryBuilder("v")->select();
        return $query;
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
