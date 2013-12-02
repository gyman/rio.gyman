<?php

namespace Dende\EntriesBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Entry
 *
 * @ORM\Table("entries")
 * @ORM\Entity(repositoryClass="Dende\EntriesBundle\Entity\EntryRepository")
 */
class Entry {

    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="entry_date", type="datetime")
     */
    private $entryDate;

    /**
     * @var integer
     *
     * @ORM\ManyToOne(targetEntity="Dende\MembersBundle\Entity\Member", inversedBy="entries")
     * @ORM\JoinColumn(name="member_id", referencedColumnName="id")
     */
    private $member;

    /**
     * @ORM\ManyToOne(targetEntity="Dende\ScheduleBundle\Entity\Activity")
     * @ORM\JoinColumn(name="activity_id", referencedColumnName="id", onDelete="SET NULL")
     */
    private $activity;

    /**
     * @ORM\ManyToOne(targetEntity="Dende\VouchersBundle\Entity\Voucher", inversedBy="entries")
     * @ORM\JoinColumn(name="voucher_id", referencedColumnName="id", onDelete="SET NULL")
     */
    private $voucher;

    public function getVoucher() {
        return $this->voucher;
    }

    public function setVoucher($voucher) {
        $this->voucher = $voucher;
        return $this;
    }

    public function getActivity() {
        return $this->activity;
    }

    public function setActivity($activity) {
        $this->activity = $activity;
        return $this;
    }

    public function getMember() {
        return $this->member;
    }

    public function setMember($member) {
        $this->member = $member;
        return $this;
    }

    /**
     * Get id
     *
     * @return integer 
     */
    public function getId() {
        return $this->id;
    }

    /**
     * Set entryDate
     *
     * @param \DateTime $entryDate
     * @return Entry
     */
    public function setEntryDate($entryDate) {
        $this->entryDate = $entryDate;

        return $this;
    }

    /**
     * Get entryDate
     *
     * @return \DateTime 
     */
    public function getEntryDate() {
        return $this->entryDate;
    }

}
