<?php

namespace Dende\EntriesBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;
use Dende\EntriesBundle\Entity\Entry;
use Doctrine\Common\Collections\ArrayCollection;
use Dende\ScheduleBundle\Entity\EventRepository;
use Dende\ScheduleBundle\Entity\ActivityRepository;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\Form\FormEvent;
use Dende\ScheduleBundle\Form\DataTransformer\ActivityTransformer;

class EntryType extends AbstractType {
// <editor-fold defaultstate="collapsed" desc="fields">

    /**
     *
     * @var EntryRepository
     */
    private $eventRepository;

    /**
     *
     * @var ActivityRepository
     */
    private $activityRepository;

    /**
     *
     * @var Entry 
     */
    private $entry;

    /**
     *
     * @var ArrayCollection 
     */
    private $currentActivities;

    /**
     *
     * @var ArrayCollection 
     */
    private $voucherActivities;

    /**
     *
     * @var ArrayCollection 
     */
    private $allActivities;

// </editor-fold>
// <editor-fold defaultstate="collapsed" desc="setters and getters">

    /**
     * 
     * @return ActivityRepository
     */
    public function getActivityRepository() {
        return $this->activityRepository;
    }

    /**
     * 
     * @param \Dende\ScheduleBundle\Entity\ActivityRepository $activityRepository
     * @return \Dende\EntriesBundle\Form\EntryType
     */
    public function setActivityRepository(ActivityRepository $activityRepository) {
        $this->activityRepository = $activityRepository;
        return $this;
    }

    /**
     * 
     * @return ArrayCollection
     */
    public function getCurrentActivities() {
        return $this->currentActivities;
    }

    /**
     * 
     * @return Entry
     */
    public function getEntry() {
        return $this->entry;
    }

    /**
     * 
     * @param \Dende\EntriesBundle\Entity\Entry $entry
     * @return \Dende\EntriesBundle\Form\EntryType
     */
    public function setEntry(Entry $entry) {
        $this->entry = $entry;
        return $this;
    }

    /**
     * 
     * @return EventsRepository
     */
    public function getEventRepository() {
        return $this->eventRepository;
    }

    /**
     * 
     * @param \Dende\ScheduleBundle\Entity\EventRepository $eventRepository
     * @return \Dende\EntriesBundle\Form\EntryType
     */
    public function setEventRepository(EventRepository $eventRepository) {
        $this->eventRepository = $eventRepository;
        return $this;
    }

    /**
     * 
     * @return ArrayCollection
     */
    public function getVoucherActivities() {
        return $this->voucherActivities;
    }

    /**
     * 
     * @return ArrayCollection
     */
    public function getAllActivities() {
        return $this->allActivities;
    }

    /**
     * 
     * @param \Doctrine\Common\Collections\ArrayCollection $voucherActivities
     * @return \Dende\EntriesBundle\Form\EntryType
     */
    public function setVoucherActivities(ArrayCollection $voucherActivities) {
        $this->voucherActivities = $voucherActivities;
        return $this;
    }

    /**
     * 
     * @param \Doctrine\Common\Collections\ArrayCollection $restActivities
     * @return \Dende\EntriesBundle\Form\EntryType
     */
    public function setAllActivities(ArrayCollection $restActivities) {
        $this->allActivities = $restActivities;
        return $this;
    }

    /**
     * 
     * @param \Doctrine\Common\Collections\ArrayCollection $currentActivities
     * @return \Dende\EntriesBundle\Form\EntryType
     */
    public function setCurrentActivities(ArrayCollection $currentActivities) {
        $this->currentActivities = $currentActivities;
        return $this;
    }

// </editor-fold>

    public function __construct(EventRepository $eventRepository, ActivityRepository $activityRepository) {
        $this->setEventRepository($eventRepository);
        $this->setActivityRepository($activityRepository);

        $this->currentActivities = new ArrayCollection();
        $this->voucherActivities = new ArrayCollection();
        $this->allActivities = new ArrayCollection();
    }

    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options) {

        if ($options["data"] instanceof Entry)
        {
            $this->setEntry($options["data"]);
        }

        $builder
                ->add($builder->create('activity', "choice", array(
                            'multiple' => false,
                            'choices'  => $this->getActivities(),
                        ))
                        ->addModelTransformer(new ActivityTransformer($this->getActivityRepository()))
                )
                ->add('entryType', 'choice', array(
                    'choices'  => $this->getChoices()->toArray(),
                    'data'     => "voucher",
                    "expanded" => true
                ))
        ;
// <editor-fold defaultstate="collapsed" desc="event listener for pre set data">

        /*
          $builder->addEventListener(FormEvents::PRE_SET_DATA, function(FormEvent $event) {
          $form = $event->getForm();
          $entry = $form->getConfig()->getData();
          $voucher = $entry->getVoucher();

          if ($voucher)
          {
          $form->add(
          $builder->create(
          'birthdate', "date", array(
          "widget" => "single_text",
          //                            "empty_value" => false,
          "format" => "dd.MM.yyyy"
          ))
          ->addModelTransformer(new Transformer())
          );
          }
          }); */
        // </editor-fold>
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

    public function getActivities() {
        $this->loadCurrentActivities();
        $this->loadVoucherActivities();
        $this->loadAllActivities();

        return array(
            "Trwające"  => $this->getCurrentActivities()->toArray(),
            "Karnet"    => $this->getVoucherActivities()->toArray(),
            "Wszystkie" => $this->getAllActivities()->toArray()
        );
    }

    /**
     * 
     * @return array
     */
    protected function loadCurrentActivities() {
        $currentEventsCollection = $this->getEventRepository()->getCurrentEvents();

        if (count($currentEventsCollection) > 0)
        {
            /** @var Event Description */
            foreach ($currentEventsCollection as $event) {
                /** @var Activity Description */
                $activity = $event->getActivity();
                $this->getCurrentActivities()->offsetSet($activity->getId(), $activity->getName());
            }
        }
    }

    protected function loadVoucherActivities() {
        /** @var Voucher */
        $voucher = $this->getEntry()->getVoucher();

        if ($voucher && count($voucher->getActivities()) > 0)
        {
            $voucherActivitiesCollection = $voucher->getActivities();
            /** @var Activity Description */
            foreach ($voucherActivitiesCollection as $activity) {
                $this->getVoucherActivities()->offsetSet($activity->getId(), $activity->getName());
            }
        }
    }

    protected function loadAllActivities() {
        $activitiesCollection = $this->getActivityRepository()->getAllActivities();

        if (count($activitiesCollection) > 0)
        {
            foreach ($activitiesCollection as $activity) {
                $this->getAllActivities()->offsetSet($activity->getId(), $activity->getName());
            }
        }
    }

    protected function getChoices() {
        $choices = new ArrayCollection(array(
            'free' => 'darmowe',
            'paid' => "płatne",
//            'multisport' => 'multisport',
        ));

        $voucher = $this->getEntry()->getVoucher();

        if ($voucher && $voucher->getAmountLeft() > 0)
        {
            $choices->offsetSet("voucher", "na karnet");
        }

        return $choices;
    }

}
