<?php include_once('_includes/header.php'); 
	
	if(isset($_GET['id'])){
		$id=$_GET['id'];
	} else{
		$id = 1;
	}	
?>

<script>
	get_messages_secretly(<?= $id?>);
</script>


<?php include_once('_includes/footer.php'); ?>