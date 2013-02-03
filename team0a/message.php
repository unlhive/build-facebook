<?php
    include_once('connection.php');
	
	
	// this is a line comment
	
	/*
		this is a
		multiline
		comment
	*/
	
	$user_receiver_id = '1';
	
	$message_result = mysql_query("SELECT * FROM messaging WHERE receivers_id = '$user_receiver_id' ");
	
	$message_array = array();
	
	$temporary_array = array();
	
	
	while($row = mysql_fetch_assoc($message_result)){
		
		$temporary_array['senders_id'] = $row['senders_id'];
		$temporary_array['message'] = $row['message'];
		$temporary_array['timestamp'] = $row['timestamp'];
		
		array_push( $message_array, $temporary_array);
		
	}
	
	//print_r($message_array);
	
?>

<div id="message_content">
	
	<?php
	foreach($message_array as $row_msg){
		?>
		<div class="message_box">
			<p>Sender Id: <?=$row_msg['senders_id'];?></p>
			<p>Message: <?=$row_msg['message'];?></p>
			<p>Sent At: <?=$row_msg['timestamp'];?></p>
			
			<hr><br>
		</div>	
		<?php
		
	}

	?>

</div>
