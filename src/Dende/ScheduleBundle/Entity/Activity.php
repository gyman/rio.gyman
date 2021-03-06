<?php

namespace Dende\ScheduleBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Activity
 *
 * @ORM\Table("activities")
 * @ORM\Entity(repositoryClass="Dende\ScheduleBundle\Entity\ActivityRepository")
 */
class Activity {

    /**
     * @ORM\ManyToMany(targetEntity="Dende\VouchersBundle\Entity\Voucher" , mappedBy="activities")

     */
    private $vouchers;

    /**
     * @ORM\OneToMany(targetEntity="Dende\ScheduleBundle\Entity\Event", mappedBy="activity")
     */
    private $events;

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
     * @ORM\Column(name="name", type="string", length=255)
     */
    private $name;

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
     * @return Activity
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

    public function getVouchers() {
        return $this->vouchers;
    }

    public function getEvents() {
        return $this->events;
    }

    public function setVouchers($vouchers) {
        $this->vouchers = $vouchers;
        return $this;
    }

    public function setEvents($events) {
        $this->events = $events;
        return $this;
    }

}
