<?php

use Symfony\Component\HttpKernel\Kernel;
use Symfony\Component\Config\Loader\LoaderInterface;

class AppKernel extends Kernel
{
    public function registerBundles()
    {
        $bundles = array(
            new Symfony\Bundle\FrameworkBundle\FrameworkBundle(),
            new Symfony\Bundle\SecurityBundle\SecurityBundle(),
            new Symfony\Bundle\TwigBundle\TwigBundle(),
            new Symfony\Bundle\MonologBundle\MonologBundle(),
            new Symfony\Bundle\SwiftmailerBundle\SwiftmailerBundle(),
            new Doctrine\Bundle\DoctrineBundle\DoctrineBundle(),
            new Sensio\Bundle\FrameworkExtraBundle\SensioFrameworkExtraBundle(),
            new Bc\Bundle\BootstrapBundle\BcBootstrapBundle(),
            new Dende\MembersBundle\MembersBundle(),
            new Dende\VouchersBundle\VouchersBundle(),
            new Dende\DefaultBundle\DefaultBundle(),
            new Dende\LayoutBundle\LayoutBundle(),
            new Oneup\UploaderBundle\OneupUploaderBundle(),
            new Dende\ScheduleBundle\ScheduleBundle(),
            new Dende\EntriesBundle\EntriesBundle(),
            new Hackzilla\BarcodeBundle\HackzillaBarcodeBundle(),
            new Stof\DoctrineExtensionsBundle\StofDoctrineExtensionsBundle(),
            new Dende\DashboardBundle\DashboardBundle(),
            new Dende\FiltersBundle\FiltersBundle(),
            new Dende\ListsBundle\ListsBundle(),
            new Dende\ReportsBundle\ReportsBundle(),
            new FOS\JsRoutingBundle\FOSJsRoutingBundle(),
        );

        if (in_array($this->getEnvironment(), array('dev', 'test'))) {
            $bundles[] = new Symfony\Bundle\WebProfilerBundle\WebProfilerBundle();
            $bundles[] = new Sensio\Bundle\DistributionBundle\SensioDistributionBundle();
            $bundles[] = new Sensio\Bundle\GeneratorBundle\SensioGeneratorBundle();
            $bundles[] = new Doctrine\Bundle\FixturesBundle\DoctrineFixturesBundle();
        }

        return $bundles;
    }

    public function registerContainerConfiguration(LoaderInterface $loader)
    {
        $loader->load(__DIR__.'/config/config_'.$this->getEnvironment().'.yml');
    }
}
