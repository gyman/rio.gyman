<?php

namespace Dende\EntriesBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

class EntryType extends AbstractType {

    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options) {
        $builder
                ->add('activity', "entity", array(
                    'class'         => 'ScheduleBundle:Activity',
                    'property'      => 'name',
                    'multiple'      => false,
                    'query_builder' => function($er) {
                return $er->createQueryBuilder('a');
            },
                ))
                ->add('entryType', 'choice', array(
                    'choices'  => array(
                        'free'    => 'darmowe',
                        'voucher' => 'na karnet',
                        'paid'    => "płatne"
                    ),
                    'data'     => "voucher",
                    "expanded" => true
                ))
        ;
    }

    /**
     * @param OptionsResolverInterface $resolver
     */
    public function setDefaultOptions(OptionsResolverInterface $resolver) {
        $resolver->setDefaults(array(
            'data_class' => 'Dende\EntriesBundle\Entity\Entry'
        ));
    }

    /**
     * @return string
     */
    public function getName() {
        return 'dende_entriesbundle_entry';
    }

}
