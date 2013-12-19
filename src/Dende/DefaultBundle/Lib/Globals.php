<?php

namespace Dende\DefaultBundle\Lib;

class Globals {

    protected static $galleryDir;
    protected static $noImage;

    // <editor-fold defaultstate="collapsed" desc="setters and getters">

    public static function getGalleryDir() {
        return self::$galleryDir;
    }

    public static function setGalleryDir($galleryDir) {
        self::$galleryDir = $galleryDir;
    }

    public static function getNoImage() {
        return self::$noImage;
    }

    public static function setNoImage($noImage) {
        self::$noImage = $noImage;
    }

// </editor-fold>

    /**
     * 
     * @param string $string
     * @return string
     */
    public static function applyGalleryDir($string) {
        if (self::checkIfImageExists($string))
        {
            return self::getGalleryDir() . $string;
        }

        return self::getNoImage();
    }

    public static function checkIfImageExists($string) {
        $file = self::getGalleryDir() . $string;
        $filepath = __DIR__."/../../../../web/".$file;
        
        return file_exists($filepath);
    }

}
