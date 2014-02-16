<?php

namespace Dende\MembersBundle\Form\Subfilters;

use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;
use Dende\MembersBundle\Form\Subfilters\SubfilterType;

class AgeType extends SubfilterType {

    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options) {
        $builder
                ->add("type", "choice", array(
                    "choices" => array(
                        "lt"      => "mniej niż",
                        "gt"      => "więcej niż",
                        "between" => "pomiędzy"
                    )
                ))
                ->add("age1", "text")
                ->add("age2", "text");
    }

}
