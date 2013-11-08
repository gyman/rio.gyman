<?php

namespace Dende\VouchersBundle\Entity;

use Doctrine\ORM\EntityRepository;
use Dende\MembersBundle\Entity\Member;

/**
 * @inherit
 */
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
        $query->orderBy("v.endDate","DESC");

        return $query;
    }

}
