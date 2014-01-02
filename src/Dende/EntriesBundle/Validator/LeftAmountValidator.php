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
                && $entry->getVoucher()->getAmountLeft() == 0)
        {
            $context->addViolation("Użytkownik wykorzystał już wszystkie wejścia z posiadanego karnetu!");
        }
    }

//
//    /**
//     *
//     * @var VoucherManager $voucherManager 
//     */
//    private $voucherManager;
//
//    public function __construct(VoucherManager $voucherManager) {
//        $this->voucherManager = $voucherManager;
//    }
//
//    public function validate($voucher, Constraint $constraint) {
//        $previousVoucher = $voucher->getPreviousVoucher();
//
//        if ($previousVoucher && $previousVoucher->getEndDate() > $voucher->getStartDate() && $previousVoucher->getIsActive())
//        {
//            $lastEndDate = $previousVoucher->getEndDate();
//
//            if ($lastEndDate)
//            {
//                $properDate = $lastEndDate->format("d.m.Y");
//                $this->context->addViolationAt('startDate', 'Istnieją już karnety wykupione na ten okres! Ustaw datę początkową conajmniej na ' . $properDate);
//            }
//        }
//
//        if ($voucher->getEndDate() != null && $voucher->getStartDate() > $voucher->getEndDate())
//        {
//            $this->context->addViolationAt('endDate', 'Data końcowa musi być po dacie początkowej!');
//        }
//    }
}
