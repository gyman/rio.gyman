<?php

namespace Dende\VouchersBundle\Exception;

use Dende\VouchersBundle\Entity\Voucher;

class VoucherManagerException extends \Exception {

    /**
     *
     * @var Voucher 
     */
    private $voucher;

    const ENDDATE_IN_FUTURE = 1101;

    public function __construct($message, $code, $previous, Voucher $voucher) {
        $this->setVoucher($voucher);
        parent::__construct($message, $code, $previous);
    }

    /**
     * 
     * @return Voucher
     */
    public function getVoucher() {
        return $this->voucher;
    }

    /**
     * 
     * @param \Dende\VouchersBundle\Entity\Voucher $voucher
     * @return \Dende\VouchersBundle\Exception\VoucherManagerException
     */
    public function setVoucher(Voucher $voucher) {
        $this->voucher = $voucher;
        return $this;
    }

}
