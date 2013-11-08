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
        $existingVouchers = $this->voucherManager
                ->findOverlappingWithRange($voucher->getMember(), $voucher->getStartDate(), $voucher->getEndDate())
        ;

        if (count($existingVouchers) > 0)
        {
            /**
             * @var \DateTime Description
             */
            
            $lastEndDate = $existingVouchers[0]->getEndDate();
            $lastEndDate->add(new \DateInterval('P1D'));
            $properDate = $lastEndDate->format("d.m.Y");
            $this->context->addViolationAt('startDate', 'Istnieją już karnety wykupione na ten okres! Ustaw datę początkową conajmniej na '.$properDate);
        }
    }

}
