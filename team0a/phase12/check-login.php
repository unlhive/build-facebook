<?php
session_start();
ob_start();

if(isset($_SESSION['username'])){
	// great, user is logged in!
	
} else {
	
	if(isset($_POST['username']) && strlen($_POST['username'])!=0){
		$username = $_POST['username'];
	} else {
		header('Location: login.php');
	}
	
	if(isset($_POST['password']) && strlen($_POST['password'])!=0){
		$password = $_POST['password'];
	} else {
		// go back to login page
		header('Location: login.php');
	}
	
	 if($username == 'sourabh' && $password == 'hive'){
		$_SESSION['username'] = $username;
		header('Location: index.php');
	} else {
		
		// then go back to login page
		header('Location: login.php');
	}	
	
	
}

ob_flush();
?>