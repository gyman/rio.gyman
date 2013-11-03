<?php

namespace Dende\ScheduleBundle\Services\Manager;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\QueryBuilder;
use Dende\ScheduleBundle\Entity\Activity;
use Dende\ScheduleBundle\Entity\ActivityRepository;
use Dende\DefaultBundle\Services\Manager\BaseManager;

class ActivityManager extends BaseManager {
    
    /**
     * Gets all activities as id => name array
     * @return array
     */
    public function getActivitiesAssoc()
    {
        $repository = $this->getRepo();
        
        $query = $repository->getActivitiesQuery();
        
        $data =  $query->getQuery()->execute();
        
        $result = array();
        
        foreach($data as $item)
        {
            $result[$item->getId()] = $item->getName();
        }
        
        return $result;
    }
    
}
