<?php

/**
 * Database Configuration
 *
 * All of your system's database configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/db.php
 */

return array(
	'server' => $_ENV['DATA_DB_HOST'],
	'database' => 'gonano',
	'user' => $_ENV['DATA_DB_USER'],
	'password' => $_ENV['DATA_DB_PASS'],
	'tablePrefix' => 'craft'
);
