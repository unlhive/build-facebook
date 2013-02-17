<?php
	$db_username 	= "buildfacebook";
	$db_password 	= "ArchHall#127";
	$db_name		= "buildfacebook";
	$hostname 		= "buildfacebook.db.10430962.hostedresource.com";
	
	$connection		= mysql_connect($hostname, $db_username, $db_password);
	
	$select_db		= mysql_select_db($db_name, $connection);


?>