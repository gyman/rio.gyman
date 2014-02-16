<?php

namespace Dende\MembersBundle\Filters;

use Doctrine\ORM\QueryBuilder;

class Gender extends Subfilter {

    public function applyToQuery(QueryBuilder $queryBuilder) {
        $gender = $this->options["gender"];
        $queryBuilder->andWhere("m.gender = :gender");
        $queryBuilder->setParameter("gender", $gender);
    }
}
