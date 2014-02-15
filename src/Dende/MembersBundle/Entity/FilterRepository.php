<?php

namespace Dende\MembersBundle\Entity;

use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\QueryBuilder;
use Symfony\Component\HttpFoundation\Request;
use Dende\MembersBundle\Entity\Filter;
use Doctrine\Common\Collections\ArrayCollection;

class FilterRepository extends EntityRepository {

    public function getPinnedFilters() {
        return $this->createQueryBuilder("f")
                ->where("f.pinned = true")
                ->getQuery()
                ->execute();
    }

}
