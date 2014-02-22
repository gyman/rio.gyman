<?php

namespace Dende\ListsBundle\Entity;

use Doctrine\ORM\QueryBuilder;

interface ListCompatible {

    public function getQuery();

    public function getTotalCount();

    public function getPaginator(QueryBuilder $query);

    public function getSortingColumns();
}
