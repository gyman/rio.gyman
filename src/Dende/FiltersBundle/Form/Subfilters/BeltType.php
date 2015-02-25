<?php

namespace Dende\FiltersBundle\Form\Subfilters;

use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;
use Dende\FiltersBundle\Form\Subfilters\SubfilterType;

class BeltType extends SubfilterType {

    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options) {
        $builder
                ->add("type", "choice", array(
                    "choices" => array(
                        "eq"  => "równy",
                        "lt"  => "niższy niż",
                        "gt"  => "wyższy niż",
                        "not" => "inny niż"
                    )
                ))
                ->add('belt', "choice", array(
                    "choices" => array(
			"mma" =>    "mma",
                        "white"  => "biały",
			"white-x" => "białe x",
                        "blue"   => "niebieski",
                        "purple" => "purpurowy",
                        "brown"  => "brązowy",
                        "black"  => "czarny",
                    )
        ));
    }

}
