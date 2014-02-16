<?php

namespace Dende\MembersBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;
use Dende\MembersBundle\Form\Subfilters\SubfilterType;

class FilterType extends AbstractType {

    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options) {

        $builder
                ->add('addFilter', "choice", array(
                    "choices"     => array(
                        "search"           => "Szukaj",
                        "age"              => "Wiek",
                        "gender"           => "Płeć",
                        "belt"             => "Pas",
                        "currentVoucher"   => "Aktualny karnet",
                        "voucherStart"     => "Karnet - data rozpoczęcia",
                        "voucherEnd"       => "Karnet - data zakończenia",
                        "entryDate"        => "Data wejścia",
                        "entryType"        => "Płatność za wejście",
                        "activities"       => "Zajęcia",
                        "registrationDate" => "Data rejestracji",
                    ),
                    "label"       => "Dodaj opcję",
                    "empty_value" => "wybierz",
                    "mapped"      => false
                ))
                ->add('save', "checkbox", array(
                    "label"  => "Zapisz filtr",
                    "mapped" => false
                ))
                ->add('name', "text", array(
                    "label" => "Nazwa filtra",
                ))
                ->add('pinned', "checkbox", array(
                    "label" => "Pokaż na dashboardzie",
                ))
                ->add('filter', "hidden")
        ;
    }

    /**
     * @return string
     */
    public function getName() {
        return 'dende_membersbundle_filter';
    }

    public function setDefaultOptions(OptionsResolverInterface $resolver) {
        $resolver->setDefaults(array(
            'data_class' => 'Dende\MembersBundle\Entity\Filter',
        ));
    }

}
