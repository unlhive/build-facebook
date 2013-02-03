<?php

/*
$username = $_GET['username'];
$password = $_GET['password'];
*/

if(isset($_POST['username'])){
	$username = $_POST['username'];
} else {
	// go back to login page
}

if(isset($_POST['password'])){
	$password = $_POST['password'];
} else {
	// go back to login page
}

if($username == 'sourabh' && $password == 'hive'){
	
	// then proceed to website
} else {
	
	// then go back to login page
}


?>