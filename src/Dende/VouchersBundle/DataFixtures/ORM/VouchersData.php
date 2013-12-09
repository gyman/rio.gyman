<?php

namespace Dende\MembersBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;
use Dende\VouchersBundle\Entity\Voucher;
use Symfony\Component\Yaml\Yaml;

class VouchersData extends AbstractFixture implements OrderedFixtureInterface {

    private $manager;

    public function load(ObjectManager $manager) {
        $this->manager = $manager;

        $value = Yaml::parse(file_get_contents(__DIR__ . '/../Yaml/vouchers.yml'));

        foreach ($value as $key => $params) {
            $voucherObject = $this->insertVoucher($params);
            $this->addReference($key, $voucherObject);
        }
    }

    public function getOrder() {
        return 20;
    }

    private function insertVoucher($params) {
        extract($params);

        $voucher = new Voucher();
        $voucher->setAmount($amount);
        $voucher->setAmountLeft($amountLeft);
        $voucher->setBarcode($barcode);
        $voucher->setEndDate(new \DateTime($endDate));
        $voucher->setStartDate(new \DateTime($startDate));
        $voucher->setIsActive($isActive);
        $voucher->setPrice($price);
        
        if ($member)
        {
            $voucher->setMember($this->getReference($member));
        }

        if ($previousVoucher)
        {
            $voucher->setPreviousVoucher($this->getReference($previousVoucher));
        }

        $this->manager->persist($voucher);
        $this->manager->flush();

        return $voucher;
    }

}
