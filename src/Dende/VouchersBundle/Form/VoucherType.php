<?php

namespace Dende\VouchersBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

class VoucherType extends AbstractType {

    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options) {
        $builder
                ->add('startDate', "date", array(
                    "widget"      => "single_text",
                    "empty_value" => date("d.m.Y"),
                    "format"      => "dd.MM.yyyy",
                ))
                ->add('endDate', "date", array(
                    "widget"      => "single_text",
                    "empty_value" => date("d.m.Y"),
                    "format"      => "dd.MM.yyyy"
                ))
                ->add('price')
                ->add('amount')
                ->add('groups', "choice", array(
                    "mapped"   => false,
                    'choices'  => array(
                        35  => 'Morning',
                        47 => 'Afternoon',
                        85   => 'Evening',
                    ),
                    'multiple' => true,
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
