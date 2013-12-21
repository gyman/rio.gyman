<?php

namespace Dende\VouchersBundle\Services\Manager;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\QueryBuilder;
use Dende\VouchersBundle\Entity\Voucher;
use Dende\VouchersBundle\Entity\VoucherRepository;
use Dende\DefaultBundle\Services\Manager\BaseManager;
use Dende\MembersBundle\Entity\Member;
use Dende\VouchersBundle\Exception\VoucherManagerException;
use Exception;


/**
 * Manages Vouchers
 * @method VouchersRepository getRepository() getRepo() Returns entity repository
 */
class VoucherManager extends BaseManager {

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
            throw new Exception("Voucher not found");
        }

        $member->setDeletedAt(new \DateTime());
        $this->persist($member);
        $this->flush($member);
    }

    /**
     * @param QueryBuilder $query
     */
    public function setActiveCriteria(QueryBuilder $query) {
        $query->andWhere("v.deletedAt is null");
    }

    public function findOverlappingWithRange(Member $member, \DateTime $startDate, \DateTime $endDate) {
        $repository = $this->getRepository();
        $query = $repository->getVouchersOverlappingQuery($member, $startDate, $endDate);
        $result = $query->getQuery()->execute();

        return $result;
    }

    /**
     * 
     * @param Member $member
     * @return Voucher
     */
    public function getLastVoucher(Member $member) {
        $previousVouchersCollection = $member->getVouchers();

        if ($previousVouchersCollection->count() > 0)
        {
            return $previousVouchersCollection->last();
        }

        return null;
    }

    public function closeVoucher(Voucher $voucher) {
        $voucher->setEndDate(new \DateTime());
        $voucher->setIsActive(false);
        $this->save($voucher);
    }

    /**
     * 
     * @param Member $member
     * @return Voucher
     */
    public function createNewVoucherNow(Member $member) {
        return $this->createNewVoucher($member, false);
    }

    /**
     * 
     * @param Member $member
     * @return Voucher
     */
    public function createNewVoucherAtEndDate(Member $member) {
        return $this->createNewVoucher($member, true);
    }

    /**
     * 
     * @param \Dende\MembersBundle\Entity\Member $member
     * @param bool $usePreviousEndDate
     * @return \Dende\VouchersBundle\Entity\Voucher
     */
    public function createNewVoucher(Member $member, $usePreviousEndDate = false) {
        $lastVoucher = $this->getLastVoucher($member);

        $voucher = new Voucher();
        $startDate = new \DateTime();

        if ($lastVoucher)
        {
            $voucher->setPreviousVoucher($lastVoucher);

            if ($usePreviousEndDate && $lastVoucher->getEndDate())
            {
                $startDate = clone($lastVoucher->getEndDate());
            }
        }

        $endDate = clone($startDate);
        $endDate->add(new \DateInterval("P1M"));

        $voucher->setMember($member);
        $voucher->setStartDate($startDate);
        $voucher->setEndDate($endDate);
        $voucher->setPrice(100);
        $voucher->setAmount(10);
        $voucher->setIsActive(true);
        $voucher->setBarcode(uniqid());

        return $voucher;
    }

}
