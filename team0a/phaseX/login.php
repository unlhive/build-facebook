<?php
	include_once('_includes/header.php');
?>

<form method="post" action="check_login.php">

	Username : 
    
    <input type="text" name="username" > <br><br>
    
    Password :
    
    <input type="password" name="password" > <br><br>

	<input type="submit" value="Login">

</form>

<?php
	include_once('_includes/footer.php');
?>
	