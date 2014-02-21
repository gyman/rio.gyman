<?php

namespace Dende\DefaultBundle\Command;

use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;

class UpdateVouchersCommand extends ContainerAwareCommand {

    protected function configure() {
        $this
                ->setName('vouchers:update')
                ->setDescription('Removes old vouchers and sets actual')
        ;
    }

    protected function executeOld(InputInterface $input, OutputInterface $output) {
        $membersWithOldVouchers = $this->getContainer()->get("member_repository")->findOldVouchers();

        if (count($membersWithOldVouchers) == 0)
        {
            return;
        }

        $memberManager = $this->getContainer()->get("member_manager");

        $ids = array();

        foreach ($membersWithOldVouchers as $member) {
            $ids["member#" . $member->getId()] = $member->getCurrentVoucher()->getId();
            $member->setCurrentVoucher(null);
            $memberManager->save($member);
        }

        $message = sprintf("Found and removed %d vouchers", count($membersWithOldVouchers));

        $output->writeln($message);
        $this->getContainer()->get("logger")->info($message, $ids);
    }

    protected function execute(InputInterface $input, OutputInterface $output) {
        $em = $this->getContainer()->get("doctrine")->getManager();
        $now = new \DateTime();
        $memberRepository = $this->getContainer()->get("member_repository");
        $members = $memberRepository->getQuery()
                        ->leftJoin("m.vouchers", "v")
                        ->where("v.startDate <= :now")
                        ->andWhere("v.endDate >= :now")
                        ->setParameters(array(
                            "now" => $now,
                        ))
                        ->getQuery()->execute();

        if (count($members) == 0)
        {
            return;
        }

        $ids = array();

        foreach ($members as $member) {
            $vouchers = $member->getVouchers();

            $member->setCurrentVoucher(null);

            foreach ($vouchers as $voucher) {
                if ($voucher->getStartDate() <= $now && $voucher->getEndDate() >= $now)
                {
                    $member->setCurrentVoucher($voucher);
                    $em->persist($member);
                    $ids["member#" . $member->getId()] = $voucher;
                    break;
                }
            }
        }

        $em->flush();

        $message = sprintf("Found and updated %d members", count($ids));

        $output->writeln($message);
        $this->getContainer()->get("logger")->info($message, $ids);
    }

}
