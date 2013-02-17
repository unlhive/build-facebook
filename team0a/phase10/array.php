<?php
		
	$food_array = array(
						array('apple', 'peach', 'watermelon'),
						array('broccoli', 'mushroom', 'spinach'),
						array('milk', 'cheese', 'butter')
						);
						
	//print_r($food_array);						
	
	//print_r($food_array[0][2]);
	
	/*
	foreach($food_array as $value){
		print_r($value);
		echo " this is a new array <br><br>";
	}
	*/
	foreach($food_array as $value){
		
		echo "Name: " . $value[0] . "<br>";
		echo "Passion: " . $value[1] . "<br>";
		echo "Dream: " . $value[2] . "<br>";
		
		echo "<br><br>";
	}
	
?>