<?php

namespace Dende\MembersBundle\Services\Manager;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\QueryBuilder;
use Dende\MembersBundle\Entity\Member;
use Dende\MembersBundle\Entity\MemberRepository;
use Dende\DefaultBundle\Services\Manager\BaseManager;

class MemberManager extends BaseManager {
    /**
     * Returns array of all members
     * @return array
     */
    public function getMembers() {
        $query = $this->getRepository()->getMembersQuery();
        $this->setActiveCriteria($query);
        return $query->getQuery()->execute();
    }

    /**
     * Returns member by id
     * @param int $id
     * @return Member
     */
    public function getById($id) {
        return $this->getRepository()->find($id);
    }

    /**
     * @param QueryBuilder $query
     */
    public function setActiveCriteria(QueryBuilder $query) {
        $query->andWhere("m.deletedAt is null");
    }

    /**
     * 
     * @param \Dende\MembersBundle\Entity\Member $member
     * @return Voucher|null
     */
    public function getCurrentVoucher(Member $member) {
        $voucher = $this->get("voucher_repository")->getVoucherActiveForDate(new \DateTime(), $member);
        return $voucher;
    }

}
