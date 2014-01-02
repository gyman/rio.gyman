<?php

namespace Dende\MembersBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;
use Dende\ScheduleBundle\Entity\Event;
use Symfony\Component\Yaml\Yaml;

class EventsData extends AbstractFixture implements OrderedFixtureInterface {

    private $manager;

    public function load(ObjectManager $manager) {
        $this->manager = $manager;
        
        $value = Yaml::parse(file_get_contents(__DIR__.'/../Yaml/events.yml'));
        
        foreach($value as $key => $params)
        {
            $activityObject = $this->insertActivity($params);
            $this->addReference($key, $activityObject);
        }
    }

    public function getOrder() {
        return 200;
    }

    private function insertActivity($params) {
        extract($params);

        $event = new Event();
        $event->setActivity($this->getReference($activity));
        $event->setDayOfWeek($dayOfWeek);
        $event->setStartHour($startHour);
        $event->setEndHour($endHour);

        $this->manager->persist($event);
        $this->manager->flush();

        return $event;
    }

}
