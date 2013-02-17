var r_id = '';

$(document).ready(function(){

	

});

function get_messages_secretly(receiver_id){
	
	r_id = receiver_id;
	
	setInterval(call_messages_function, 2000);
	
}

function call_messages_function(){
	$.ajax({
		url: '_includes/get_messages.php',
		data: "id=" + r_id,
		success: function(html_received){
			$("#content-container").html(html_received);
		}		
	});
}