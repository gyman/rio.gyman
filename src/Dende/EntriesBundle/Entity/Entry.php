<?php

namespace Dende\EntriesBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use DateTime;
use Symfony\Component\Validator\Constraints as Assert;
use Dende\EntriesBundle\Validator as Validate;

/**
 * Entry
 * @Assert\Callback(methods={
 *     { "Dende\EntriesBundle\Validator\LeftAmountValidator", "isAmountLeft"}
 * })
 * @ORM\Table("entries")
 * @ORM\Entity(repositoryClass="Dende\EntriesBundle\Entity\EntryRepository")
 */
class Entry {
// <editor-fold defaultstate="collapsed" desc="fields">

    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

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

    /**
     * @var string $gender
     *
     * @ORM\Column(name="entry_type", type="string", columnDefinition="enum('free', 'voucher', 'paid', 'multisport')", nullable=true)
     * @Assert\NotBlank(message = "Pole nie może być puste!")
     */
    private $entryType;

    /**
     * @var DateTime $created
     * @Gedmo\Timestampable(on="create")
     * @ORM\Column(name="created", type="datetime", nullable=false)
     */
    private $created;

    /**
     * @var DateTime $modified
     * @Gedmo\Timestampable(on="update")
     * @ORM\Column(name="modified", type="datetime", nullable=false)
     */
    private $modified;

    /**
     * @var Datetime $deletedAt
     *
     * @ORM\Column(name="deleted", type="datetime", nullable=true)
     */
    private $deleted;

// </editor-fold>
// <editor-fold defaultstate="collapsed" desc="setters and getters">

    public function getEntryType() {
        return $this->entryType;
    }

    public function setEntryType($entryType) {
        $this->entryType = $entryType;
        return $this;
    }

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

// </editor-fold>

}
