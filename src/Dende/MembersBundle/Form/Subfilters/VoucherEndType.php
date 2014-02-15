<?php

namespace Dende\MembersBundle\Form\Subfilters;

use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;
use Dende\MembersBundle\Form\Subfilters\SubfilterType;

class VoucherEndType extends SubfilterType {

    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options) {
        $builder
                ->add("type", "choice", array(
                    "choices" => array(
                        "eq"         => "równy",
                        "lt"         => "wcześniej niż",
                        "gt"         => "później niż",
                        "between"    => "pomiędzy",
                        "notBetween" => "poza",
                        "today"      => "dzisiaj",
                        "yesterday"  => "wczoraj",
                        "this_week"  => "ten tydzień",
                        "last_week"  => "poprzedni tydzień",
                        "this_month" => "ten miesiąc",
                        "last_month" => "poprzedni miesiąc",
                        "this_year"  => "ten rok",
                        "last_year"  => "poprzedni rok",
                    )
                ))
                ->add("date1", "text")
                ->add("date2", "text")
        ;
    }

}
