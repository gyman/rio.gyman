<?php

namespace Dende\MembersBundle\Services\Manager;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\QueryBuilder;
use Dende\MembersBundle\Entity\Member;
use Dende\MembersBundle\Entity\MemberRepository;
use Dende\DefaultBundle\Services\Manager\BaseManager;

class MemberManager extends BaseManager {
    // <editor-fold defaultstate="collapsed" desc="fields">
    // </editor-fold>

    /**
     * Returns array of all members
     * @return array
     */
    public function getMembers() {
        $query = $this->getRepo()->getMembersQuery();
        $this->setActiveCriteria($query);
        return $query->getQuery()->execute();
    }

    /**
     * Returns member by id
     * @param int $id
     * @return Member
     */
    public function getById($id) {
        return $this->getRepo()->find($id);
    }

    public function setAsDeleted($id) {
        $member = $this->getById($id);

        if (!$member)
        {
            throw new Exception("Member not found");
        }

        $member->setDeletedAt(new \DateTime());
        $this->persist($member);
        $this->flush($member);
    }

    /**
     * @param QueryBuilder $query
     */
    public function setActiveCriteria(QueryBuilder $query)
    {
        $query->andWhere("m.deletedAt is null");
    }
    
    /**
     * 
     * @param \Dende\MembersBundle\Entity\Member $member
     * @return Voucher|null
     */
    public function getCurrentVoucher(Member $member)
    {
        $now = date("Y-m-d H:i:s");
        $repository = $this->getRepo();
        
        $query = $repository->createQueryBuilder();
        $repository->setStartDateLessOrEqual($query,$now);
        $repository->setEndDateGreaterOrEqual($query,$now);
        $voucher = $query->getQuery()->execute();
        
        return $voucher;
        
    }
    
}
