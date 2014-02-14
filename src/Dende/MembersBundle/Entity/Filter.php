<?php

namespace Dende\MembersBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use Dende\DefaultBundle\Validator as DefaultBundle;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Doctrine\Common\Collections\ArrayCollection;
use Dende\DefaultBundle\Lib\Globals;
use Gedmo\Mapping\Annotation as Gedmo;
use DateTime;

/**
 * Member
 *
 * @ORM\Table("filters")
 * @ORM\Entity(repositoryClass="Dende\MembersBundle\Entity\FilterRepository")
 */
class Filter {

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
     * @var string
     * 
     * @ORM\Column(name="filter", type="string", length=4096, nullable=false)
     */
    private $filter;

    /**
     * @ORM\OneToMany(targetEntity="Dende\EntriesBundle\Entity\Entry", mappedBy="member",cascade={"remove"}, orphanRemoval=true)
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

    public function __construct() {
        $this->vouchers = new ArrayCollection();
    }

}
