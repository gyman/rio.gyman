<?php

namespace Dende\MembersBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Doctrine\Common\Collections\ArrayCollection;
use Dende\DefaultBundle\Lib\Globals;
use Gedmo\Mapping\Annotation as Gedmo;
use DateTime;

/**
 * Member
 *
 * @ORM\Table("members")
 * @ORM\Entity(repositoryClass="Dende\MembersBundle\Entity\MemberRepository")
 * @UniqueEntity(
 *     fields={"email"},
 *     message="Ten email jest już zarejestrowany"
 * )
 * @Gedmo\SoftDeleteable(fieldName="deletedAt", timeAware=false)
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
     * @ORM\OneToMany(targetEntity="Dende\VouchersBundle\Entity\Voucher", mappedBy="member")
     */
    protected $vouchers;

    /**
     * @ORM\OneToOne(targetEntity="Dende\VouchersBundle\Entity\Voucher")
     * @ORM\JoinColumn(name="current_voucher_id", referencedColumnName="id", onDelete="SET NULL", nullable=true)
     */
    protected $currentVoucher;

    /**
     * @var string $gender
     *
     * @ORM\Column(name="belt", type="string", columnDefinition="enum('white','blue','purple','brown','black')", nullable=true)
     * @Assert\NotBlank(message = "Pole nie może być puste!")
     */
    private $belt;

    /**
     * @var string
     * @Gedmo\Slug(fields={"name"}, updatable=true, separator="-", unique=true)
     * @ORM\Column(name="name_slug", type="string", nullable=false)
     */
    private $nameSlug;

    /**
     * @ORM\OneToMany(targetEntity="Dende\EntriesBundle\Entity\Entry", mappedBy="member")
     */
    private $entries;

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
     * @ORM\Column(name="deletedAt", type="datetime", nullable=true)
     */
    private $deletedAt;

// </editor-fold>
// <editor-fold defaultstate="collapsed" desc="setters and getters">


    public function getEntries() {
        return $this->entries;
    }

    public function setEntries($entries) {
        $this->entries = $entries;
        return $this;
    }

    public function getModified() {
        return $this->modified;
    }

    public function setModified(DateTime $modified) {
        $this->modified = $modified;
        return $this;
    }

    public function getNameSlug() {
        return $this->nameSlug;
    }

    public function getCreated() {
        return $this->created;
    }

    public function setNameSlug($nameSlug) {
        $this->nameSlug = $nameSlug;
        return $this;
    }

    public function setCreated(DateTime $created) {
        $this->created = $created;
        return $this;
    }

    public function getBelt() {
        return $this->belt;
    }

    public function setBelt($belt) {
        $this->belt = $belt;
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
        return Globals::applyGalleryDir($this->foto);
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

    public function getCurrentVoucher() {
        return $this->currentVoucher;
    }

    public function setCurrentVoucher($currentVoucher) {
        $this->currentVoucher = $currentVoucher;
        return $this;
    }

// </editor-fold>

    public function __construct() {
        $this->vouchers = new ArrayCollection();
    }

}
