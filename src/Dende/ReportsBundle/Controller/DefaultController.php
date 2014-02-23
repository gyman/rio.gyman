<?php

namespace Dende\ReportsBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\Request;

/**
 * @Route("/")
 */
class DefaultController extends Controller {

    /**
     * @Route("/{listname}.{_format}", name="_report_download", defaults={"_format" = "csv"}, requirements={"_format" = "(csv|xml|pdf|html|txt)", "listname" = "(members|vouchers|entries)"})
     * @Template()
     */
    public function indexAction($listname, Request $request) {
        $vouchersList = $this->get("vouchers_list");
        $data = $vouchersList->getFullDataView();
        $format = $request->getRequestFormat();

        $filename = sprintf("report_%s_%s.%s",$listname,date("Y-m-d_H:i:s"),$format);
        
        $response = $this->render('ReportsBundle:Default:' . ucfirst($listname) . '/index.' . $format . '.twig', array('data' => $data));

//        $response->headers->set('Content-Type', 'text/csv');
        $response->headers->set('Content-Disposition', 'attachment; filename="'.$filename.'"');

        return $response;
    }
    
    

}
