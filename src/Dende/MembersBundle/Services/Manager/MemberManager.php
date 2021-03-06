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
        $query = $this->getRepository()->getQuery();
        $this->getRepository()->setActiveCriteria($query);
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
     * Returns member by barcode
     * @param int $code
     * @return Member
     */
    public function getByBarcode($code) {
        return $this->getRepository()->findByBarcode($code);
    }

    /**
     * 
     * @param Member $member
     * @return Voucher|null
     */
    public function getCurrentVoucher(Member $member) {
        return $member->getCurrentVoucher();
    }

}
