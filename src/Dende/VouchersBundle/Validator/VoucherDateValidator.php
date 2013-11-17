<?php

namespace Dende\VouchersBundle\Validator;

use Symfony\Component\Validator\ConstraintValidator;
use Symfony\Component\Validator\Constraint;
use Dende\VouchersBundle\Entity\Voucher;
use Dende\MembersBundle\Entity\Member;
use Dende\VouchersBundle\Services\Manager\VoucherManager;

class VoucherDateValidator extends ConstraintValidator {

    /**
     *
     * @var VoucherManager $voucherManager 
     */
    private $voucherManager;

    public function __construct(VoucherManager $voucherManager) {
        $this->voucherManager = $voucherManager;
    }

    public function validate($voucher, Constraint $constraint) {
        $previousVoucher = $voucher->getPreviousVoucher();


        if ($previousVoucher && $previousVoucher->getEndDate() >= $voucher->getStartDate())
        {
            $lastEndDate = $previousVoucher->getEndDate();

            if ($lastEndDate)
            {
                $lastEndDate->add(new \DateInterval('P1D'));
                $properDate = $lastEndDate->format("d.m.Y");
                $this->context->addViolationAt('startDate', 'Istnieją już karnety wykupione na ten okres! Ustaw datę początkową conajmniej na ' . $properDate);
            }
        }

        if ($voucher->getEndDate() != null && $voucher->getStartDate() > $voucher->getEndDate())
        {
            $this->context->addViolationAt('endDate', 'Data końcowa musi być po dacie początkowej!');
        }
    }

}
