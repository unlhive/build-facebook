<?php
ob_start();
session_start();

include_once('_includes/db_connection.php');

if( isset($_SESSION['username-logged'] ) ){
	// don't worry about checking anything else

} else {
	
	if( isset($_POST['username']) ){
		$username = $_POST['username'];
		
	} else {
		header('Location: login.php');
	}
	
	if( isset($_POST['password'] ) ){
		$password = $_POST['password'];
	
	} else {
		header('Location: login.php');	
	}
	
	$query = "SELECT `id` FROM `profile` WHERE `name` = '$username' AND `password` = '$password' ";
	
	$result = mysql_query($query) or die(mysql_error());
	
	if( mysql_num_rows($result) == 1){
		
		$_SESSION['username-logged'] = $username;
		header('Location: index.php');
			
	} elseif ( mysql_num_rows($result) == 0){
		
		header('Location: login.php');	
			
	} else{
		
		// I AM SCREWED !
			
	}
	
	
}
ob_flush();









?>