<?php

namespace Dende\VouchersBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

class VoucherType extends AbstractType {

    private $activity_manager;

    public function __construct($activityManager) {
        $this->activity_manager = $activityManager;
    }

    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options) {
        $builder
                ->add('startDate', "date", array(
                    "widget"      => "single_text",
                    "format"      => "dd.MM.yyyy",
                ))
                ->add('endDate', "date", array(
                    "widget"      => "single_text",
                    "format"      => "dd.MM.yyyy"
                ))
                ->add('price')
                ->add('amount')
                ->add('activities', "entity", array(
                    'class'         => 'ScheduleBundle:Activity',
                    'property' => 'name',
                    'multiple'      => true,
                    'query_builder' => function($er) {
                return $er->createQueryBuilder('a');
            },
                ))
        ;
    }

    /**
     * @param OptionsResolverInterface $resolver
     */
    public function setDefaultOptions(OptionsResolverInterface $resolver) {
        $resolver->setDefaults(array(
            'data_class' => 'Dende\VouchersBundle\Entity\Voucher'
        ));
    }

    /**
     * @return string
     */
    public function getName() {
        return 'dende_vouchersbundle_voucher';
    }

}
