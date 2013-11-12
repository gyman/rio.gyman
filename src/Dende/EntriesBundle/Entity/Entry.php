<?php

namespace Dende\EntriesBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Entry
 *
 * @ORM\Table()
 * @ORM\Entity(repositoryClass="Dende\EntriesBundle\Entity\EntryRepository")
 */
class Entry {

    /**
     * @ORM\OneToOne(targetEntity="Dende\ScheduleBundle\Entity\Activity")
     * @ORM\JoinColumn(name="activityId", referencedColumnName="id")
     */
    private $activity;

    public function getActivity() {
        return $this->activity;
    }

    public function setActivity($activity) {
        $this->activity = $activity;
        return $this;
    }

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
     * @ORM\Column(name="member_id", type="integer")
     */
    private $memberId;

    /**
     * @var integer
     *
     * @ORM\Column(name="activity_id", type="integer")
     */
    private $activityId;

    /**
     * @var integer
     *
     * @ORM\Column(name="voucher_id", type="integer")
     */
    private $voucherId;

    public function getVoucherId() {
        return $this->voucherId;
    }

    public function setVoucherId($voucherId) {
        $this->voucherId = $voucherId;
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

    /**
     * Set memberId
     *
     * @param integer $memberId
     * @return Entry
     */
    public function setMemberId($memberId) {
        $this->memberId = $memberId;

        return $this;
    }

    /**
     * Get memberId
     *
     * @return integer 
     */
    public function getMemberId() {
        return $this->memberId;
    }

    /**
     * Set activityId
     *
     * @param integer $activityId
     * @return Entry
     */
    public function setActivityId($activityId) {
        $this->activityId = $activityId;

        return $this;
    }

    /**
     * Get activityId
     *
     * @return integer 
     */
    public function getActivityId() {
        return $this->activityId;
    }

}
