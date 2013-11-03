<?php

namespace Dende\ScheduleBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Event
 *
 * @ORM\Table("events")
 * @ORM\Entity(repositoryClass="Dende\ScheduleBundle\Entity\EventRepository")
 */
class Event
{
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
     * @ORM\Column(name="activity_id", type="integer")
     */
    private $activityId;

    /**
     * @var integer
     *
     * @ORM\Column(name="day_of_week", type="integer")
     */
    private $dayOfWeek;

    /**
     * @var string
     *
     * @ORM\Column(name="start_hour", type="string", length=255)
     */
    private $startHour;

    /**
     * @var string
     *
     * @ORM\Column(name="end_hour", type="string", length=255)
     */
    private $endHour;


    /**
     * Get id
     *
     * @return integer 
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set activityId
     *
     * @param integer $activityId
     * @return Event
     */
    public function setActivityId($activityId)
    {
        $this->activityId = $activityId;
    
        return $this;
    }

    /**
     * Get activityId
     *
     * @return integer 
     */
    public function getActivityId()
    {
        return $this->activityId;
    }

    /**
     * Set dayOfWeek
     *
     * @param integer $dayOfWeek
     * @return Event
     */
    public function setDayOfWeek($dayOfWeek)
    {
        $this->dayOfWeek = $dayOfWeek;
    
        return $this;
    }

    /**
     * Get dayOfWeek
     *
     * @return integer 
     */
    public function getDayOfWeek()
    {
        return $this->dayOfWeek;
    }

    /**
     * Set startHour
     *
     * @param string $startHour
     * @return Event
     */
    public function setStartHour($startHour)
    {
        $this->startHour = $startHour;
    
        return $this;
    }

    /**
     * Get startHour
     *
     * @return string 
     */
    public function getStartHour()
    {
        return $this->startHour;
    }

    /**
     * Set endHour
     *
     * @param string $endHour
     * @return Event
     */
    public function setEndHour($endHour)
    {
        $this->endHour = $endHour;
    
        return $this;
    }

    /**
     * Get endHour
     *
     * @return string 
     */
    public function getEndHour()
    {
        return $this->endHour;
    }
}
