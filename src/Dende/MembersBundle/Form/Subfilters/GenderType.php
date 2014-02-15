<?php

namespace Dende\MembersBundle\Form\Subfilters;

use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;
use Dende\MembersBundle\Form\Subfilters\SubfilterType;

class GenderType extends SubfilterType {

    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options) {
        $builder->add("gender", "choice", array(
                    "choices" => array(
                        "male" => "Mężczyzna",
                        "female" => "Kobieta"
                    )
                ));
    }

}
