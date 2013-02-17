<?php include_once('_includes/header.php'); ?>

	<form id="login-form" action="check-login.php" method="post">
		<input type="text" name="username"> Username 
		<br><br>
		<input type="password" name="password"> Password
		<br><br>
		<input type="submit" value="Login">
	</form>

<?php include_once('_includes/footer.php'); ?>