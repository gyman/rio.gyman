<?php

namespace Dende\MembersBundle\DataFixtures\ORM;

use Doctrine\Common\Persistence\ObjectManager;
use Doctrine\Common\DataFixtures\FixtureInterface;
use Dende\MembersBundle\Entity\Member;
use Symfony\Component\Yaml\Yaml;

class MembersData implements FixtureInterface {

    private $manager;

    public function load(ObjectManager $manager) {
        $value = Yaml::parse(file_get_contents(__DIR__.'/../Yaml/members.yml'));
        $this->manager = $manager;
        
        foreach($value as $member)
        {
            $this->insertMember($member);
        }

        // store reference of admin-user for other Fixtures
//        $this->addReference('admin-user', $user);
    }

    public function getOrder() {
        return 10;
    }

    private function insertMember($params) {
        extract($params);

        $member = new Member();
        $member->setBirthdate(new \DateTime($birthdate));
        $member->setDeletedAt($deletedAt);
        $member->setEmail($email);
        $member->setFoto($foto);
        $member->setGender($gender);
        $member->setName($name);
        $member->setNotes($notes);
        $member->setPhone($phone);
        $member->setZipcode($zipcode);

        $this->manager->persist($member);
        $this->manager->flush();

        return $member;
    }

}
