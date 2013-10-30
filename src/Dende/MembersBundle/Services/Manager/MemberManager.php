<?php

namespace Dende\MembersBundle\Services\Manager;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Query;
use Dende\MembersBundle\Entity\Member;
use Dende\MembersBundle\Entity\MemberRepository;
use Dende\MembersBundle\Services\Manager\BaseManager;

class MemberManager extends BaseManager {

    // <editor-fold defaultstate="collapsed" desc="fields">

    // </editor-fold>

    /**
     * Returns array of all members
     * @return array
     */
    public function getMembers() {
        return $this->getRepo()->getMembersQuery()
                        ->execute();
    }

    /**
     * Returns member by id
     * @param int $id
     * @return Member
     */
    public function getById($id) {
        return $this->getRepo()->find($id);
    }

    public function handleFotoUpload($form, $member, $uploadDir) {
        $foto = $form['foto']->getData();

        if ($foto !== null)
        {
            $extension = $foto->guessExtension();
            if (!$extension)
            {
                // extension cannot be guessed
                $extension = 'bin';
            }

            $filename = md5(microtime()) . '.' . $extension;
            $foto->move($uploadDir, $filename);

            $member->setFoto($filename);
            
            return true;
        }
    }

}
