<?php

namespace Dende\MembersBundle\Filters;

use Doctrine\ORM\QueryBuilder;

class EntryDate extends Subfilter {

    protected $field = "e.created";

    public function applyToQuery(QueryBuilder $queryBuilder) {
        $method = $this->options["type"];
        $queryBuilder->innerJoin("m.entries", "e");
        $this->d1 = new \DateTime($this->options["date1"]);
        $this->d2 = new \DateTime($this->options["date2"]);
        $this->$method($queryBuilder);
    }

}
