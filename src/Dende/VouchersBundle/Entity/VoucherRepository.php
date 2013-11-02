<?php

namespace Dende\VouchersBundle\Entity;

use Doctrine\ORM\EntityRepository;

class VoucherRepository extends EntityRepository
{
    
    /**
     * Get all Vouchers query
     * @return Doctrine\ORM\QueryBuilder
     */
    public function getVouchersQuery()
    {
        $query = $this->createQueryBuilder("v")->select();
        return $query;
    }
}
