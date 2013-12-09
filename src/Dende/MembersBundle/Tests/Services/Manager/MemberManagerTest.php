<?php

namespace Dende\MembersBundle\Tests\Services\Manager;

use Dende\MembersBundle\Services\Manager\MemberManager;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Doctrine\Common\DataFixtures\Loader;
use Doctrine\Common\DataFixtures\Purger\ORMPurger;
use Doctrine\Common\DataFixtures\Executor\ORMExecutor;

class MemberManagerTest extends WebTestCase {

    /**
     * @var Dende\MembersBundle\Services\Manager\MemberManager
     */
    private $memberManager;
    
    /**
     * @var \Doctrine\ORM\EntityManager
     */
    private $em;

    /**
     * @var Doctrine\Common\DataFixtures\Loader 
     */
    private $loader;
    
    // <editor-fold defaultstate="collapsed" desc="test setup">
    protected function setUp() {
        static::$kernel = static::createKernel();
        static::$kernel->boot();
        $this->em = static::$kernel->getContainer()
                ->get('doctrine')
                ->getManager()
        ;

        $this->memberManager = static::$kernel->getContainer()->get("member_manager");
        
        $this->loader = new Loader;
        $this->loader->loadFromDirectory(__DIR__.'/../../../DataFixtures/ORM');
        $this->loader->loadFromDirectory(__DIR__.'/../../../../VouchersBundle/DataFixtures/ORM');
        $this->loader->loadFromDirectory(__DIR__.'/../../../../ScheduleBundle/DataFixtures/ORM');

        $purger = new ORMPurger($this->em);
        $executor = new ORMExecutor($this->em, $purger);
        $executor->execute($this->loader->getFixtures());
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
    
    public function testGetCurrentVoucher() {
        $repo = $this->em->getRepository("MembersBundle:Member");
        $member = $repo->findOneByName("Jan Kowalski");
        $currentVoucher = $this->memberManager->getCurrentVoucher($member);
        
        $this->assertEquals("1234567892",$currentVoucher->getBarcode());
    }

}
