<?php

namespace Dende\MembersBundle\Twig;

use Dende\MembersBundle\Entity\Member;

class CurrentVoucherProgressBarExtension extends \Twig_Extension {

    private $markup = '<div class="progress progress-mini progress-danger left tip" oldtitle="%%percentage%%" title="" data-hasqtip="true" aria-describedby="qtip-4">
                <div style="width: %%percentage%%%;" class="bar"></div>
                </div>
                <span class="percent">%%days_left%% dni</span>';
    
    public function getFilters() {
        return array(
            new \Twig_SimpleFilter('progressbar', array($this, 'getProgressBar',
                array(
                    "is_safe" => array('html')
                ))),
        );
    }

    public function getProgressBar(Member $member) {
        $voucher = $member->getCurrentVoucher();
        
        if (!$voucher)
        {
            return null;
        }
        
        $startDate = $voucher->getStartDate();
        $endDate = $voucher->getEndDate();
        
        $totalDays = $startDate->diff($endDate)->days;
        $leftDays = $endDate->diff(new \DateTime())->days;
        
        $percentage = intval(100 - ($leftDays / $totalDays * 100));
       
        return str_replace(array("%%percentage%%","%%days_left%%"), array($percentage,$leftDays), $this->markup);
    }

    public function getName() {
        return 'current_voucher_progressbar_extension';
    }

}
