<?php

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/general.php
 */

return array(
  '*' => array(
    'omitScriptNameInUrls' => true,
    'generateTransformsBeforePageLoad' => true,
    'usePathInfo'=> true,
    'cpTrigger' => 'admin',
    'cacheDuration' => 'P2W',
    'useCompressedJs' => true,
    'allowAutoUpdates' => false,
    'siteName' => ''
  ),
  // Localhost development site
  '.local' => array(
    'devMode' => true,
    'doAnalytics' => false,
    'useCompressedJs' => false,
    'allowAutoUpdates' => true
  ),
  // Staging site
  '.nanobox.io' => array(
    'devMode' => true,
    'doAnalytics' => false,
    'useCompressedJs' => false,
    'allowAutoUpdates' => true
  ),
  // Production site
  'whatever.com' => array(
    'devMode' => false,
    'doAnalytics' => true,
    'useCompressedJs' => true,
    'allowAutoUpdates' => true
  )
);
