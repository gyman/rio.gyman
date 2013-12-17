<?php
namespace Dende\MembersBundle\Form\DataTransformer;

use Symfony\Component\Form\DataTransformerInterface;
use Symfony\Component\Form\Exception\TransformationFailedException;

class DateToStringTransformer implements DataTransformerInterface
{

    /**
     * 
     * @param string $string
     * @return \DateTime
     */
    public function transform($string = "now")
    {
        return new \DateTime($string);
    }

    /**
     * 
     * @param \DateTime $date
     * @return string
     */
    public function reverseTransform($date)
    {
        return $date->format("Y-m-d");
    }
    
}