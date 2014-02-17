<?php

namespace Dende\MembersBundle\Filters;
use Doctrine\ORM\QueryBuilder;

class VoucherEnd extends Subfilter {

    protected $field = "v.endDate";

    public function applyToQuery(QueryBuilder $queryBuilder) {
        $method = $this->options["type"];
        $this->field = $this->prep("v").".endDate";
        $queryBuilder->innerJoin("m.vouchers", $this->prep("v"));
        $this->d1 = new \DateTime($this->options["date1"]);
        $this->d2 = new \DateTime($this->options["date2"]);
        $this->$method($queryBuilder);
    }

}
