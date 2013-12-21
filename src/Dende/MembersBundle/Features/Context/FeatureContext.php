<?php

namespace Dende\MembersBundle\Features\Context;

use Symfony\Component\HttpKernel\KernelInterface;
use Behat\Symfony2Extension\Context\KernelAwareInterface;
use Behat\MinkExtension\Context\MinkContext;
use Behat\Behat\Context\BehatContext,
    Behat\Behat\Exception\PendingException;
use Behat\Gherkin\Node\PyStringNode,
    Behat\Gherkin\Node\TableNode;
use Behat\Behat\Context\Step\Then;
use Behat\Behat\Context\Step\When;
use Behat\Mink\Exception\ElementNotFoundException;
use Behat\Mink\Exception\ExpectationException;
use Behat\Mink\Exception\ResponseTextException;

class FeatureContext extends MinkContext implements KernelAwareInterface {

    private $kernel;
    private $parameters;

    /**
     * Initializes context with parameters from behat.yml.
     *
     * @param array $parameters
     */
    public function __construct(array $parameters) {
        $this->parameters = $parameters;
    }

    /**
     * Sets HttpKernel instance.
     * This method will be automatically called by Symfony2Extension ContextInitializer.
     *
     * @param KernelInterface $kernel
     */
    public function setKernel(KernelInterface $kernel) {
        $this->kernel = $kernel;
    }

    /**
     * @When /^(?:|I )click element "([^"]*)"$/
     */
    public function iClickElement($locator) {
        $element = $this->getSession()
                ->getPage()
                ->find("css", $locator);

        if ($element == NULL)
        {
            throw new ElementNotFoundException($this->getSession(), 'element', 'css', $locator);
        }

        $element->click();
    }

    /**
     * @When /^(?:|I )will wait to see "(?P<text>(?:[^"]|\\")*)"$/
     * @Then /^(?:|I )should see "(?P<text>(?:[^"]|\\")*)" after time$/
     */
    public function iWaitToSee($text, $maxWait = 5) {
        $tick = 250000;
        $timeout = time() + $maxWait;

        $text = $this->fixStepArgument($text);

        $regex = '/' . preg_quote($text, '/') . '/ui';

        while (time() < $timeout) {
            usleep($tick);

            $actual = $this->getSession()->getPage()->getText();
            $actual = preg_replace('/\s+/u', ' ', $actual);

            if (preg_match($regex, $actual))
            {
                return;
            }
        }

        $message = sprintf('The text "%s" was not found anywhere in the text of the current page.', $text);
        throw new ResponseTextException($message, $this->getSession());
    }

}
