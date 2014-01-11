<?php

namespace Dende\MembersBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;
use Dende\MembersBundle\Form\DataTransformer\DateToStringTransformer;
use Dende\MembersBundle\Entity\Member;
use Dende\VouchersBundle\Entity\Voucher;

class MemberListFilterType extends AbstractType {
    
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
                    )
                ))
                ->add('belt', "choice", array(
                    "choices" => array(
                        "white"  => "biały",
                        "blue"   => "niebieski",
                        "purple" => "purpurowy",
                        "brown"  => "brązowy",
                        "black"  => "czarny"
                    )
                ))
                ->add('activities', "choice", array(
                    'multiple' => true,
                    'choices'  => $this->getActivitiesFromOptions($options),
                    "mapped"   => false,
                    "disabled" => true
                ))
        ;
    }

    /**
     * @return string
     */
    public function getName() {
        return 'dende_membersbundle_memberlistfilter';
    }
}
