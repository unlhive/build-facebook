
function setUpControls(){	

		// make control variables	
		
		 upisdown = false; 
		 leftisdown = false; 
		 rightisdown = false; 
		 downisdown = false;
		 spaceisdown = false;

// use jQuery to see when a key is pressed.

 $(document).on("keydown", function(e){
	 
	 // use if statements to do something if the correct key is pressed. 
			 
			 if(e.keyCode == 87){
				 
				 //change variable to we know that the up key is down. 
				 
				 upisdown = true; 
				 
				 }; 
				 
			 if(e.keyCode == 65){
				 
				 leftisdown = true; 
				 
				 }; 
				 
				 if(e.keyCode == 68){
				 
				 rightisdown = true; 
				 
				 }; 
			 if(e.keyCode == 83){
				 
				 downisdown = true; 
				 
				 }; 
				 
				 if(e.keyCode == 32){
				 
				 spaceisdown = true; 
				 
				 }; 	 
				 
		 
			 });
			 
// use jQuery to see when a key is released.

$(document).on("keyup", function(e){
	
	// do the reverse of above 

			 if(e.keyCode == 87){
				 
				 upisdown = false; 
				 
				 }; 
				 
			 if(e.keyCode == 65){
				 
				 leftisdown = false; 
				 
				 }; 
				 
				 if(e.keyCode == 68){
				 
				 rightisdown = false; 
				 
				 }; 
			 if(e.keyCode == 83){
				 
				 downisdown = false; 
				 
				 }; 
				 
			if(e.keyCode == 32){
				 
				 spaceisdown = false; 
				 
				 };	 
				 
		 
			 });	  
			 
			 
};