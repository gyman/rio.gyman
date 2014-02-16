<?php

namespace Dende\MembersBundle\Filters;

use Doctrine\ORM\QueryBuilder;

abstract class Subfilter {

    /**
     * subfilter options
     * @var array 
     */
    public $options = array();

    public function __construct($options) {
        $this->options = $options;
    }

    public function applyFilterToQuery(QueryBuilder $query) {
        throw new \Exception("You should implement this method in filter class!");
    }

}
