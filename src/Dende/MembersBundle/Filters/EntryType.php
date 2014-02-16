<?php

namespace Dende\MembersBundle\Filters;

use Doctrine\ORM\QueryBuilder;

class EntryType extends Subfilter {

    public function applyToQuery(QueryBuilder $queryBuilder) {
        $method = $this->options["type"];
        $queryBuilder->setParameter("entryType", $this->options["entryType"]);
        $queryBuilder->innerJoin("m.entries", "e");
        $this->$method($queryBuilder);
    }

    private function eq(QueryBuilder $queryBuilder) {
        $queryBuilder->andWhere("e.entryType = :entryType");
    }

    private function not(QueryBuilder $queryBuilder) {
        $queryBuilder->andWhere("e.entryType != :entryType");
    }

}
