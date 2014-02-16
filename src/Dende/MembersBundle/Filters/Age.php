<?php

namespace Dende\MembersBundle\Filters;

use Doctrine\ORM\QueryBuilder;

class Age extends Subfilter {

    public function applyToQuery(QueryBuilder $queryBuilder) {
        $method = $this->options["type"];
        $this->$method($queryBuilder);
    }

    private function between(QueryBuilder $qb) {
        $x = new \DateTime($this->options["age2"] . " years ago");
        $y = new \DateTime($this->options["age1"] . " years ago");

        $qb->andWhere("m.birthdate >= :dateFrom");
        $qb->andWhere("m.birthdate <= :dateTo");
        $qb->setParameter("dateFrom", $x->format($this->format));
        $qb->setParameter("dateTo", $y->format($this->format));
    }

    private function gt(QueryBuilder $queryBuilder) {
        $x = new \DateTime($this->options["age1"] . " years ago");

        $queryBuilder->andWhere("m.birthdate <= :dateTo");
        $queryBuilder->setParameter("dateTo", $x->format($this->format));
    }

    private function lt(QueryBuilder $queryBuilder) {
        $x = new \DateTime($this->options["age1"] . " years ago");

        $queryBuilder->andWhere("m.birthdate >= :dateFrom");
        $queryBuilder->setParameter("dateFrom",$x->format($this->format));
    }

}
