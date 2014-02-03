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
                ->add('searchText')
                ->add('gender', "choice", array(
                    "choices" => array(
                        "male"   => "Mężczyzna",
                        "female" => "Kobieta"
                    ),
                    "label" => "Płeć",
                    "empty_value" => "każda"
                ))
                ->add('belt', "choice", array(
                    "empty_value" => "każdy",
                    "choices" => array(
                        "white"  => "biały",
                        "blue"   => "niebieski",
                        "purple" => "purpurowy",
                        "brown"  => "brązowy",
                        "black"  => "czarny"
                    )
                ))
//                ->add('activities', "choice", array(
//                    'multiple' => true,
//                    'choices'  => $this->getActivitiesFromOptions($options),
//                    "mapped"   => false,
//                    "disabled" => true
//                ))
        ;
    }

    /**
     * @return string
     */
    public function getName() {
        return 'dende_membersbundle_memberfilterlist';
    }
}
