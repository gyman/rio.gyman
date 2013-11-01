<?php

namespace Dende\VouchersBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

/**
 * Voucher
 *
 * @ORM\Table("vouchers")
 * @ORM\Entity(repositoryClass="Dende\VouchersBundle\Entity\VoucherRepository")
 */
class Voucher {

    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;


}
