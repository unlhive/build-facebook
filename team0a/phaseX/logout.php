<?php
	session_start();
	include_once('_includes/header.php');
?>

Go back to <a href="login.php"> Login </a>.	

<?php
	include_once('_includes/footer.php');
	session_destroy();
?>
	