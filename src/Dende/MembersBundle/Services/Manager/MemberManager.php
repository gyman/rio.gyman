<?php

namespace Dende\MembersBundle\Services\Manager;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\QueryBuilder;
use Dende\MembersBundle\Entity\Member;
use Dende\MembersBundle\Entity\MemberRepository;
use Dende\DefaultBundle\Services\Manager\BaseManager;
use Dende\VouchersBundle\Entity\VoucherRepository;

class MemberManager extends BaseManager {
    // <editor-fold defaultstate="collapsed" desc="fields">

    /**
     *
     * @var VoucherRepository 
     */
    private $voucher_repository;

    // </editor-fold>
    // <editor-fold defaultstate="collapsed" desc="setters & getters">

    /**
     * 
     * @return VoucherRepository 
     */
    public function getVoucherRepository() {
        return $this->voucher_repository;
    }

    /**
     * 
     * @param VoucherRepository $voucher_repository
     * @return MemberManager
     */
    public function setVoucherRepository(VoucherRepository $voucher_repository) {
        $this->voucher_repository = $voucher_repository;
        return $this;
    }

    // </editor-fold>

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
    public function setActiveCriteria(QueryBuilder $query) {
        $query->andWhere("m.deletedAt is null");
    }

    /**
     * 
     * @param \Dende\MembersBundle\Entity\Member $member
     * @return Voucher|null
     */
    public function getCurrentVoucher(Member $member) {
        $voucher = $this->voucher_repository->getVoucherActiveForDate(new \DateTime(), $member);
        return $voucher;
    }

}
