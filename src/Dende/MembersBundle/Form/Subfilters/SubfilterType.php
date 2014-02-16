<?php

namespace Dende\MembersBundle\Form\Subfilters;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

class SubfilterType extends AbstractType {

    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options) {
        
    }

    /**
     * @return string
     */
    public function getName() {
        return 'dende_membersbundle_filter_subfilters_FILTERNAME';
    }

    public function setDefaultOptions(OptionsResolverInterface $resolver) {
        $resolver->setDefaults(array(
            'data_class' => 'Dende\MembersBundle\Entity\Subfilter',
        ));
    }

}
