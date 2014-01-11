<?php

// <editor-fold defaultstate="collapsed" desc="namespace related">

namespace Dende\VouchersBundle\Controller;

use Dende\MembersBundle\Entity\Member;
use Dende\VouchersBundle\Entity\Voucher;
use Dende\VouchersBundle\Form\VoucherType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Hackzilla\BarcodeBundle\Utility\Barcode;
use Dende\VouchersBundle\Exception\VoucherManagerException; // </editor-fold>

class ListController extends Controller {

    /**
     * @Route("/list", name="_voucher_list")
     * @Template()
     */
    public function indexAction() {
        $voucherRepository = $this->get("voucher_repository");

        $vouchers = $voucherRepository->getAllVouchers();
        
        return array("vouchers" => $vouchers);
    }

}
