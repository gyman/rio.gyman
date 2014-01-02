<?php
namespace Dende\MembersBundle\Services\Listener;

use Oneup\UploaderBundle\Event\PostPersistEvent;
use Dende\DefaultBundle\Lib\Globals;

class UploadListener
{
    public function __construct($doctrine)
    {
        $this->doctrine = $doctrine;
    }

    public function onUpload(PostPersistEvent $event)
    {
            $filename = $event->getFile()->getFilename();            
            $response = $event->getResponse();
            $response["pathname"] = Globals::applyGalleryDir($filename);
            $response["filename"] = $filename;
    }
}