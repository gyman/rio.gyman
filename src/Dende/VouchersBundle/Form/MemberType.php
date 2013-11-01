<?php

namespace Dende\VouchersBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

class MemberType extends AbstractType {

    protected $uploaderHelper;
    
    public function __construct($uploaderHelper) {
        $this->uploaderHelper = $uploaderHelper;
    }

    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options) {
        $builder
                ->add('name')
                ->add('birthdate', "date", array(
                    "widget"      => "single_text",
                    "empty_value" => date("d.m.Y"),
                    "format"      => "dd.MM.yyyy"
                ))
                ->add('phone')
                ->add('email')
                ->add('notes')
                ->add('foto','hidden')
                ->add('fotoUploader', "file", array(
                    "mapped" => false,
                    "attr" => array(
                        "data-url" => $this->uploaderHelper->endpoint('gallery')
                    )
                ))
        ;
    }

    /**
     * @param OptionsResolverInterface $resolver
     */
    public function setDefaultOptions(OptionsResolverInterface $resolver) {
        $resolver->setDefaults(array(
            'data_class' => 'Dende\VouchersBundle\Entity\Member'
        ));
    }

    /**
     * @return string
     */
    public function getName() {
        return 'dende_VouchersBundle_member';
    }

}
