<?php
	$db_username 	= "root";
	$db_password 	= "";
	$db_name		= "fb-sunday";
	$hostname 		= "localhost";

	$connection		= mysql_connect($hostname, $db_username, $db_password);

	$select_db		= mysql_select_db($db_name, $connection);


?>