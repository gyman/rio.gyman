<?php

namespace Dende\MembersBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * Member
 *
 * @ORM\Table("members")
 * @ORM\Entity(repositoryClass="Dende\MembersBundle\Entity\MemberRepository")
 * @UniqueEntity(
 *     fields={"email"},
 *     message="Ten email jest już zarejestrowany"
 * )
 */
class Member {

// <editor-fold defaultstate="collapsed" desc="class fields">
    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     * 
     * @Assert\NotBlank(message = "Pole nie może być puste!")
     * 
     * @ORM\Column(name="name", type="string", length=255, nullable=false)
     */
    private $name;

    /**
     * @var \DateTime
     * 
     * @Assert\Date(message="Data musi być w formacie DD.MM.RR")
     * @ORM\Column(name="birthdate", type="string", length=64, nullable=true)
     */
    private $birthdate;

    /**
     * @var string
     * 
     * @ORM\Column(name="phone", type="string", length=64, nullable=true)
     */
    private $phone;

    /**
     * @var string
     *
     * @Assert\Email(
     *     message = "Adres '{{ value }}' nie jest poprawny.",
     *     checkMX = true
     * )
     * @ORM\Column(name="email", type="string", length=255, nullable=true)
     */
    private $email;

    /**
     * @var string
     *
     * @ORM\Column(name="notes", type="text", nullable=true)
     */
    private $notes;

    /**
     * @var string
     *
     * @ORM\Column(name="foto", type="string", length=255, nullable=true)
     */
    private $foto = "no-profile.gif";

    /**
     * @var datetime $deletedAt
     *
     * @ORM\Column(name="deletedAt", type="datetime", nullable=true)
     */
    private $deletedAt;

    /**
     * @var string $zipcode
     *
     * @ORM\Column(name="zipcode", type="string", nullable=true)
     * @Assert\Length(max=6, min=6, minMessage="Kod pocztowy musi zawierać 6 znaków",maxMessage="Kod pocztowy musi zawierać 6 znaków")
     * @Assert\Regex(
     *           pattern= "/\d{2}\-\d{3}/",
     *           match=   true,
     *           message= "Kod pocztowy musi być w formacie XX-XXX" 
     * ) 
     */
    private $zipcode;

    /**
     * @var string $gender
     *
     * @ORM\Column(name="gender", type="string", columnDefinition="enum('male', 'female')", nullable=true)
     * @Assert\NotBlank(message = "Pole nie może być puste!")
     */
    private $gender;

    /**
     * @ORM\OneToMany(targetEntity="Dende\EntriesBundle\Entity\Entry", mappedBy="member")
     */
    private $entries;

    /**
     * @ORM\OneToMany(targetEntity="Dende\VouchersBundle\Entity\Voucher", mappedBy="member")
     */
    protected $vouchers;

    /**
     * @ORM\OneToOne(targetEntity="Dende\VouchersBundle\Entity\Voucher")
     * @ORM\JoinColumn(name="last_voucher_id", referencedColumnName="id", onDelete="SET NULL", nullable=true)
     */
    protected $lastVoucher;

    /**
     * @ORM\OneToOne(targetEntity="Dende\EntriesBundle\Entity\Entry")
     * @ORM\JoinColumn(name="last_entry_id", referencedColumnName="id", onDelete="SET NULL", nullable=true)
     */
    protected $lastEntry;

// </editor-fold>
// <editor-fold defaultstate="collapsed" desc="setters and getters">
    public function getLastVoucher() {
        return $this->lastVoucher;
    }

    public function getLastEntry() {
        return $this->lastEntry;
    }

    public function setLastVoucher($lastVoucher) {
        $this->lastVoucher = $lastVoucher;
        return $this;
    }

    public function setLastEntry($lastEntry) {
        $this->lastEntry = $lastEntry;
        return $this;
    }

    public function getEntries() {
        return $this->entries;
    }

    public function setEntries($entries) {
        $this->entries = $entries;
        return $this;
    }

    public function getZipcode() {
        return $this->zipcode;
    }

    public function setZipcode($zipcode) {
        $this->zipcode = $zipcode;
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
     * Set name
     *
     * @param string $name
     * @return Member
     */
    public function setName($name) {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string 
     */
    public function getName() {
        return $this->name;
    }

    /**
     * Set birthdate
     *
     * @param \DateTime $birthdate
     * @return Member
     */
    public function setBirthdate($birthdate) {
        $this->birthdate = $birthdate;

        return $this;
    }

    /**
     * Get birthdate
     *
     * @return \DateTime 
     */
    public function getBirthdate() {
        return $this->birthdate;
    }

    /**
     * Set phone
     *
     * @param string $phone
     * @return Member
     */
    public function setPhone($phone) {
        $this->phone = $phone;

        return $this;
    }

    /**
     * Get phone
     *
     * @return string 
     */
    public function getPhone() {
        return $this->phone;
    }

    /**
     * Set email
     *
     * @param string $email
     * @return Member
     */
    public function setEmail($email) {
        $this->email = $email;

        return $this;
    }

    /**
     * Get email
     * @return string 
     */
    public function getEmail() {
        return $this->email;
    }

    /**
     * Set notes
     *
     * @param string $notes
     * @return Member
     */
    public function setNotes($notes) {
        $this->notes = $notes;

        return $this;
    }

    /**
     * Get notes
     *
     * @return string 
     */
    public function getNotes() {
        return $this->notes;
    }

    /**
     * Set foto
     *
     * @param string $foto
     * @return Member
     */
    public function setFoto($foto) {
        $this->foto = $foto;

        return $this;
    }

    /**
     * Get foto
     *
     * @return string 
     */
    public function getFoto() {
        return $this->foto;
    }

    public function getDeletedAt() {
        return $this->deletedAt;
    }

    public function setDeletedAt($deletedAt) {
        $this->deletedAt = $deletedAt;
        return $this;
    }

    public function getGender() {
        return $this->gender;
    }

    public function setGender($gender) {
        $this->gender = $gender;
        return $this;
    }

    public function getVouchers() {
        return $this->vouchers;
    }

    public function setVouchers($vouchers) {
        $this->vouchers = $vouchers;
        return $this;
    }

// </editor-fold>

    public function __construct() {
        $this->vouchers = new ArrayCollection();
    }

}
