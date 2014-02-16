<?php

namespace Dende\MembersBundle\Filters;

use Doctrine\ORM\QueryBuilder;

class Belt extends Subfilter {

    private $belts = array(
        "white",
        "blue",
        "purple",
        "brown",
        "black"
    );
    private $beltIndex;

    public function applyToQuery(QueryBuilder $queryBuilder) {
        $belt = $this->options["belt"];
        $method = $this->options["type"];

        $this->beltIndex = array_search($belt, $this->belts);
        $this->$method($queryBuilder);
    }

    protected function lt(QueryBuilder $queryBuilder) {
        $lowerThanBelts = array_slice($this->belts, $this->beltIndex);
        $queryBuilder->andWhere($queryBuilder->expr()->orX(
                        $queryBuilder->expr()->notIn("m.belt", $lowerThanBelts), $queryBuilder->expr()->isNull("m.belt")
                )
        );
    }

    protected function gt(QueryBuilder $queryBuilder) {
        $greaterThanBelts = array_slice($this->belts, 0, $this->beltIndex + 1);
        $queryBuilder->andWhere($queryBuilder->expr()->notIn("m.belt", $greaterThanBelts));
        $queryBuilder->andWhere("m.belt is not null");
    }

    protected function eq(QueryBuilder $queryBuilder) {
        $queryBuilder->setParameter("belt", $this->options["belt"]);
        if ($this->options["belt"] == "white")
        {
            $queryBuilder->andWhere($queryBuilder->expr()->orX(
                            $queryBuilder->expr()->eq("m.belt", "white"), $queryBuilder->expr()->isNull("m.belt")
                    )
            );
        }
        else
        {
            $queryBuilder->andWhere("m.belt = :belt");
        }
    }

    protected function not(QueryBuilder $queryBuilder) {
        $queryBuilder->setParameter("belt", $this->options["belt"]);
        $exp = $queryBuilder->expr();

        if ($this->options["belt"] == "white")
        {
            $queryBuilder->andWhere($exp->not($exp->eq("m.belt", ":belt")));
            $queryBuilder->andWhere($exp->isNotNull("m.belt"));
        }
        else
        {
            $queryBuilder->andWhere("m.belt != :belt");
        }
    }

}
