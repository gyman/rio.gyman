<?php

namespace Dende\MembersBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;
use Dende\MembersBundle\Form\DataTransformer\DateToStringTransformer;
use Dende\MembersBundle\Entity\Member;
use Dende\VouchersBundle\Entity\Voucher;

class MemberFilterListType extends AbstractType {

    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options) {

        $builder
                ->add('searchText', "text", array(
                    "label" => "Szukaj tekstu"
                ))
                ->add('gender', "choice", array(
                    "choices"     => array(
                        "male"   => "Mężczyzna",
                        "female" => "Kobieta"
                    ),
                    "label"       => "Płeć",
                    "empty_value" => "każda"
                ))
                ->add('belt', "choice", array(
                    "empty_value" => "każdy",
                    "choices"     => array(
                        "white"  => "biały",
                        "blue"   => "niebieski",
                        "purple" => "purpurowy",
                        "brown"  => "brązowy",
                        "black"  => "czarny"
                    ),
                    "label"       => "Kolor pasa"
                ))
                ->add('voucherStartFrom', "text", array(
                    "label" => "Początek karnetu"
                ))
                ->add('activities', "entity", array(
                    "label"         => "Zajęcia",
                    "empty_value"   => "open",
                    'class'         => 'ScheduleBundle:Activity',
                    'property'      => 'name',
                    'multiple'      => true,
                    'query_builder' => function($er) {
                return $er->createQueryBuilder('a');
            }
                ))
                ->add("saveFilter", "checkbox", array(
                    "label" => "Zapisz"
                ))
                ->add('name', "text", array(
                    "label" => "Nazwa filtra"
                ))
                ->add("addToDashboard", "checkbox", array(
                    "label" => "Przypnij na dashboardzie"
                ))
        ;
    }

    /**
     * @return string
     */
    public function getName() {
        return 'dende_membersbundle_memberfilterlist';
    }

}
