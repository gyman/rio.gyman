<?php

namespace Dende\VouchersBundle\Services\Manager;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\QueryBuilder;
use Dende\VouchersBundle\Entity\Voucher;
use Dende\VouchersBundle\Entity\VoucherRepository;
use Dende\DefaultBundle\Services\Manager\BaseManager;
use Dende\MembersBundle\Entity\Member;

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

}
