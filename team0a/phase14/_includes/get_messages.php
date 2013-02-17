<?php
    include_once('db-connection.php');	
    if(isset($_GET['id'])){
	    $receiver_id=$_GET['id'];
    } else {
	    $receiver_id = 1;
    }
    
	$message_result = mysql_query("SELECT * FROM messages WHERE receiver_id = '$receiver_id' ");
	
	$message_array = array();
	$temporary_array = array();
	
	while($row = mysql_fetch_assoc($message_result)){
		
		$temporary_array['sender_id'] = $row['sender_id'];
		$temporary_array['message_text'] = $row['message_text'];
		$temporary_array['message_timestamp'] = $row['message_timestamp'];
		
		array_push( $message_array, $temporary_array);
		
	}
	
?>

<div id="message_content">
	
	<?php
	foreach($message_array as $row_msg){
		?>
		<div class="message_box">
			<p>Sender Id: <?=$row_msg['sender_id'];?></p>
			<p>Message: <?=$row_msg['message_text'];?></p>
			<p>Sent At: <?=$row_msg['message_timestamp'];?></p>
			
			<hr><br>
		</div>	
		<?php
		
	}

	?>

</div>
