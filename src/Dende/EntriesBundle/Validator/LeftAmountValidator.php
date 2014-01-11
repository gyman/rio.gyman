<?php

namespace Dende\EntriesBundle\Validator;

//use Symfony\Component\Validator\ConstraintValidator;
//use Symfony\Component\Validator\Constraint;
//use Dende\VouchersBundle\Entity\Voucher;
//use Dende\MembersBundle\Entity\Member;
//use Dende\VouchersBundle\Services\Manager\VoucherManager;
use Symfony\Component\Validator\ExecutionContextInterface;
use Dende\EntriesBundle\Entity\Entry;

// extends ConstraintValidator

class LeftAmountValidator {

    public static function isAmountLeft(Entry $entry, ExecutionContextInterface $context) {
        if ($entry->getEntryType() == "voucher"
                && $entry->getVoucher()
                && $entry->getVoucher()->getAmount() !== null // getAmount == null oznacza, że karnet jest open!
                && $entry->getVoucher()->getAmountLeft() == 0)
        {
            $context->addViolation("Użytkownik wykorzystał już wszystkie wejścia z posiadanego karnetu!");
        }
    }
}
