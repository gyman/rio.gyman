<?php

namespace Dende\MembersBundle\Filters;

use Doctrine\ORM\QueryBuilder;

class CurrentVoucher extends Subfilter {

    public function applyToQuery(QueryBuilder $queryBuilder) {
        $hasVoucher = (bool) $this->options["currentVoucher"];
        if ($hasVoucher)
        {
            $queryBuilder->andWhere("m.currentVoucher is not null");
        }
        else
        {
            $queryBuilder->andWhere("m.currentVoucher is null");
        }
    }

}
