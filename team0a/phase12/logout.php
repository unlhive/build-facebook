<?php session_start(); ?>
<?php include_once('_includes/header.php'); ?>

	<div id="logout-message">
		<p>You've now logged out!</p>
		<p>Thank you for using <a href="index.php">Facebook</a>!</p>
	</div>
<?php session_destroy(); include_once('_includes/footer.php'); ?>