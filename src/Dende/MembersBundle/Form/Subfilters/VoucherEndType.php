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
                        "thisWeek"   => "ten tydzień",
                        "lastWeek"   => "poprzedni tydzień",
                        "thisMonth"  => "ten miesiąc",
                        "lastMonth"  => "poprzedni miesiąc",
                        "thisYear"   => "ten rok",
                        "lastYear"   => "poprzedni rok",
                    )
                ))
                ->add("date1", "text")
                ->add("date2", "text")
        ;
    }

}
