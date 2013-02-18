<?php
	ob_start();
	session_start();
?>
<!DOCTYPE html>
<html>
<head>
    <link href="_css/reset.css" style="type/css" rel="stylesheet">
    <link href="_css/base.css" style="type/css" rel="stylesheet">
    <link href='http://fonts.googleapis.com/css?family=Julius+Sans+One' rel='stylesheet' type='text/css'>
    <Title>Coding Bootcamp</Title>
</head>

<body>
    <div id="top-banner">
        <div id="top-banner-container">
            <p>facebook</p>
            <?php
				if(isset($_SESSION['username-logged']) ){
				
					?>
                    <p id="profile-name" >Hello, <?= $_SESSION['username-logged']?> | <a href="logout.php">Logout</a></p>
                    <?php	
				}
			?>
            
        </div>
    </div>
    <div id="content">
        <div id="content-container">