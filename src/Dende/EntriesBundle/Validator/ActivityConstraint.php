<?php

namespace Dende\EntriesBundle\Validator;

use Symfony\Component\Validator\Constraint;

/**
 * @Annotation
 */
class ActivityConstraint extends Constraint {

    public $message = 'Karnet uczestnika nie zawiera tych zajęć!';

    public function validatedBy() {
        return 'Dende\EntriesBundle\Validator\ActivityValidator';
    }
}
