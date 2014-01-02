<?php

namespace Dende\MembersBundle\Twig;

use Dende\MembersBundle\Entity\Member;
use Dende\MembersBundle\Services\Manager\MemberManager;

class CurrentVoucherProgressBarExtension extends \Twig_Extension {

    /**
     *
     * @var Dende\MembersBundle\Services\Manager\MemberManager
     */
    private $memberManager;

    /**
     * 
     * @return Dende\MembersBundle\Services\Manager\MemberManager
     */
    public function getMemberManager() {
        return $this->memberManager;
    }

    /**
     * 
     * @param \Dende\MembersBundle\Services\Manager\MemberManager $memberManager
     * @return \Dende\MembersBundle\Twig\CurrentVoucherProgressBarExtension
     */
    public function setMemberManager(MemberManager $memberManager) {
        $this->memberManager = $memberManager;
        return $this;
    }
    
    private $markup_date = '<div class="progress progress-striped">%%start%% - %%end%%
                                    <div style="width: %%percentage%%%;" class="bar"></div>
                                </div>';
    private $markup_entries = '<div class="progress progress-striped">%%amount_used%%/%%amount_total%% %%amount_word%%
                                    <div style="width: %%percentage%%%;" class="bar"></div>
                                </div>';

    public function getFilters() {
        return array(
            new \Twig_SimpleFilter('progressbar', array($this, 'getProgressBar',
                array(
                    "is_safe" => array('html')
                ))),
        );
    }

    public function getProgressBar(Member $member) {
        $voucher = $this->memberManager->getCurrentVoucher($member);

        if (!$voucher)
        {
            return null;
        }

        $params = func_get_args();
        $daysWord = $params[2];

        $result = "Kod karnetu: <strong>".$voucher->getBarcode()."</strong>";

        $startDate = $voucher->getStartDate();
        $endDate = $voucher->getEndDate();

        if ($endDate != null)
        {
            $totalDays = $startDate->diff($endDate)->days;
            $leftDays = $endDate->diff(new \DateTime())->days;

            $percentage = intval(100 - ($leftDays / $totalDays * 100));

            if ($leftDays == 1)
            {
                $daysWord = $params[1];
            }

            $result.=str_replace(array(
                "%%percentage%%",
                "%%days_left%%",
                "%%days_word%%",
                "%%start%%",
                "%%end%%",
                    ), array(
                $percentage,
                $leftDays,
                $daysWord,
                $startDate->format("d.m"),
                $endDate->format("d.m"),
                    ), $this->markup_date);
        }
        $amountTotal = $voucher->getAmount();

        if ($amountTotal !== null)
        {
            $amountWord = "wejść";
            $amountLeft = $voucher->getAmountLeft();

            if ($amountLeft == null)
            {
                $amountLeft = 0;
            }

            $amountUsed = $amountTotal - $amountLeft;

            $percentageAmount = intval(100 - ($amountLeft / $amountTotal * 100));

            $result.=str_replace(array(
                "%%amount_left%%",
                "%%amount_total%%",
                "%%amount_used%%",
                "%%amount_word%%",
                "%%percentage%%"
                    ), array(
                $amountLeft,
                $amountTotal,
                $amountUsed,
                $amountWord,
                $percentageAmount
                    ), $this->markup_entries);
        }

        return $result;
    }

    public function getName() {
        return 'current_voucher_progressbar_extension';
    }

}
