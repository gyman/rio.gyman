<?php

namespace Dende\EntriesBundle\Services\Listener;

use Doctrine\ORM\Event\LifecycleEventArgs;
use Dende\VouchersBundle\Entity\Voucher;
use Dende\MembersBundle\Entity\Member;
use DateTime;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Dende\EntriesBundle\Entity\Entry;

class UpdateLeftAmountListener {

    protected $container;

    public function __construct(ContainerInterface $container) {
        $this->container = $container;
    }

    public function postPersist(LifecycleEventArgs $args) {

        /** @var Voucher */
        $entry = $args->getEntity();

        if ($entry instanceof Entry && $entry->getVoucher() && $entry->getEntryType() == "voucher")
        {
            $voucher = $entry->getVoucher();
            
            $amountLeft = $voucher->getAmountLeft() - 1;

            $voucher->setAmountLeft($amountLeft);
            $this->container->get("voucher_manager")->save($voucher);

            $this->container->get('logger')->info(sprintf("Voucher#%d leftAmount set to %d", $voucher->getId(), $voucher->getAmountLeft()));
        }
    }

}
