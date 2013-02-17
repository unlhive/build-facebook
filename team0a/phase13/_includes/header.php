<?php
	session_start();
	include_once('db-connection.php');
?>
<!DOCTYPE html>
<html>
<head>
    <link href="_css/reset.css" style="type/css" rel="stylesheet">
    <link href="_css/base.css" style="type/css" rel="stylesheet">
    <link href='http://fonts.googleapis.com/css?family=Julius+Sans+One' rel='stylesheet' type='text/css'>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script src="_js/base.js"></script>
    <Title>Coding Bootcamp</Title>
</head>

<body>
    <div id="top-banner">
        <div id="top-banner-container">
            <p>facebook</p>
            <span id="profile-name">
            	<?php 
            		if(isset($_SESSION['username'])) {
            			?>
            			Hello, <?=$_SESSION['username']?> | <a href="logout.php">Logout</a> 
            			<?php
            		}
            	?>
            </span>
        </div>
    </div>
    <div id="content">
        <div id="content-container">
        
        