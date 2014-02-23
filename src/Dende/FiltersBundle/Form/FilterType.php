<?php

namespace Dende\FiltersBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;
use Dende\FiltersBundle\Form\Subfilters\SubfilterType;

class FilterType extends AbstractType {

    private $filtersList;

    // <editor-fold defaultstate="collapsed" desc="setters and getters">
    public function getFiltersList() {
        return $this->filtersList;
    }

    public function setFiltersList($filtersList) {
        $this->filtersList = $filtersList;
    }

// </editor-fold>

    public function __construct($filtersList) {
        $this->setFiltersList($filtersList);
    }

    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options) {

        $builder
                ->add('addFilter', "choice", array(
                    "choices"     => $this->getFiltersArray(),
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
                ->add('listname', "hidden")
        ;
    }

    /**
     * @return string
     */
    public function getName() {
        return 'filter';
    }

    public function setDefaultOptions(OptionsResolverInterface $resolver) {
        $resolver->setDefaults(array(
            'data_class' => 'Dende\FiltersBundle\Entity\Filter',
        ));
    }

    private function getFiltersArray() {
        $array = array();

        if (count($this->filtersList) == 0)
        {
            return $this->getFiltersList();
        }

        foreach($this->getFiltersList() as $name => $filter)
        {
            $array[$name] = $filter->getLabel();
        }
        
        return $array;
    }

}
