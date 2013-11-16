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

    private $markup = '%%start%% - %%end%% (%%amount_left%%/%%amount_total%% %%amount_word%%)
                                <div class="progress progress-striped">%%days_left%% %%days_word%%
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

        $startDate = $voucher->getStartDate();
        $endDate = $voucher->getEndDate();

        $totalDays = $startDate->diff($endDate)->days;
        $leftDays = $endDate->diff(new \DateTime())->days;

        $percentage = intval(100 - ($leftDays / $totalDays * 100));

        if ($leftDays == 1)
        {
            $daysWord = $params[1];
        }
        $amountLeft = $voucher->getAmountLeft();

        if ($amountLeft == null)
        {
            $amountLeft = 0;
        }

        $amountTotal = $voucher->getAmount();

        if ($amountTotal == null)
        {
            $amountTotal = 0;
        }

        $amountWord = "wejść";

        return str_replace(array(
            "%%percentage%%",
            "%%days_left%%",
            "%%days_word%%",
            "%%start%%",
            "%%end%%",
            "%%amount_left%%",
            "%%amount_total%%",
            "%%amount_word%%"
                ), array(
            $percentage,
            $leftDays,
            $daysWord,
            $startDate->format("d.m"),
            $endDate->format("d.m"),
            $amountLeft,
            $amountTotal,
            $amountWord
                ), $this->markup);
    }

    public function getName() {
        return 'current_voucher_progressbar_extension';
    }

}
