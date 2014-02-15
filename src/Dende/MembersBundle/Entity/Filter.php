<?php

namespace Dende\MembersBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * Member
 *
 * @ORM\Table("filters")
 * @ORM\Entity(repositoryClass="Dende\MembersBundle\Entity\FilterRepository")
 */
class Filter {

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
     * @ORM\Column(name="name", type="string", length=255, nullable=false)
     */
    private $name;

    /**
     * @var string
     * 
     * @ORM\Column(name="filter", type="string", length=4096, nullable=false)
     */
    private $filter;

    /**
     * @var ArrayCollection
     */
    private $subfilters;

    /**
     * @var string
     * 
     * @ORM\Column(name="pinned", type="boolean", nullable=true)
     */
    private $pinned;

    public function __construct() {
        $this->subfilters = new ArrayCollection();
    }

    public function getName() {
        return $this->name;
    }

    public function getFilter() {
        return $this->filter;
    }

    public function getPinned() {
        return $this->pinned;
    }

    public function setName($name) {
        $this->name = $name;
    }

    public function setFilter($filter) {
        $this->filter = $filter;
    }

    public function setPinned($pinned) {
        $this->pinned = $pinned;
    }

    public function getSubfilters() {
        return $this->subfilters;
    }

    public function setSubfilters(ArrayCollection $subfilters) {
        $this->subfilters = $subfilters;
    }

}
