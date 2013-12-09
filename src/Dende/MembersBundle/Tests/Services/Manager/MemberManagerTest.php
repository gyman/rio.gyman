<?php

namespace Dende\MembersBundle\Tests\Services\Manager;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Doctrine\Common\DataFixtures\Loader;
use Doctrine\Common\DataFixtures\Purger\ORMPurger;
use Doctrine\Common\DataFixtures\Executor\ORMExecutor;

class MemberManagerTest extends WebTestCase {

    /**
     * @var \Doctrine\ORM\EntityManager
     */
    private $em;

    // <editor-fold defaultstate="collapsed" desc="test setup">
    protected function setUp() {
        static::$kernel = static::createKernel();
        static::$kernel->boot();
        $this->em = static::$kernel->getContainer()
                ->get('doctrine')
                ->getManager()
        ;

        $loader = new Loader;
        $loader->loadFromDirectory(__DIR__.'/../../../DataFixtures/ORM');

        $purger = new ORMPurger($this->em);
        $executor = new ORMExecutor($this->em, $purger);
        $executor->execute($loader->getFixtures());
    }

    protected function tearDown() {
//        parent::tearDown();
//        $this->em->close();
    }
    // </editor-fold>

    public function testGetAllMembers() {
        $repo = $this->em->getRepository("MembersBundle:Member");
        $query = $repo->getMembersQuery();
        $this->assertCount(10,$query->getQuery()->execute());
    }

}
