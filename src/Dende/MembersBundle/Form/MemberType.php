<?php

namespace Dende\MembersBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;
use Dende\MembersBundle\Form\DataTransformer\DateToStringTransformer;

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
                ->add(
                        $builder->create(
                                'birthdate', "date", array(
                            "widget"      => "single_text",
                            "empty_value" => date("d.m.Y"),
                            "format"      => "dd.MM.yyyy"
                        ))
                        ->addModelTransformer(new DateToStringTransformer())
                )
                ->add('gender', "choice", array(
                    "choices" => array(
                        "male"   => "Mężczyzna",
                        "female" => "Kobieta"
                    )
                ))
                ->add('phone')
                ->add('email')
                ->add('notes')
                ->add('zipcode')
                ->add('foto', 'hidden')
                ->add('fotoUploader', "file", array(
                    "mapped" => false,
                    "attr"   => array(
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
            'data_class' => 'Dende\MembersBundle\Entity\Member'
        ));
    }

    /**
     * @return string
     */
    public function getName() {
        return 'dende_membersbundle_member';
    }

}
