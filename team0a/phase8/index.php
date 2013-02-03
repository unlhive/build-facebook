<!DOCTYPE html>
<?php
	include_once('db-connection.php');
	
	$get_profile_query = "SELECT * FROM team0a_profile";
	$get_profile_result = mysql_query($get_profile_query) or die("Couldn't execute query".mysql_error());
	
	$profile_array_nested = array();
	
	while($row = mysql_fetch_assoc($get_profile_result)){
		
		$temporary_array = array();
		
		$temporary_array['name'] = $row['name'];
		$temporary_array['passion'] = $row['passion'];
		$temporary_array['dream'] = $row['dream'];
		$temporary_array['image_source'] = $row['image_source'];
		
		array_push($profile_array_nested, $temporary_array);
	}
	
	// print_r($profile_array_nested);
?>

<html>
<head>
    <link href="_css/reset.css" style="type/css" rel="stylesheet">
    <link href="_css/base.css" style="type/css" rel="stylesheet">
    <link href='http://fonts.googleapis.com/css?family=Julius+Sans+One' rel='stylesheet' type='text/css'>
    <Title>Coding Bootcamp</Title>
</head>

<body>
    <div id="top-banner">
        <div id="top-banner-container">
            <p>facebook</p>
            
        </div>
    </div>
    <div id="content">
        <div id="content-container">
        	<?php
            
            	foreach($profile_array_nested as $individual_profile_array){
	            	?>
	            	<div class="profile">
	            		<div class="profile-pic">
	            			<img src="<?=$individual_profile_array['image_source']?>" width="160px" height="160px"> 
	            		</div>
	            		<div class="profile-info">
			                <p class="profile-name">Name: <?=$individual_profile_array['name']?></p>
			                <p class="profile-passion">Passion: <?=$individual_profile_array['passion']?></p>
			                <p class="profile-dream">Dream: <?=$individual_profile_array['dream']?></p>    
			            </div>
	            	
	            	</div>
	            	
	            	<div class="clear"></div>
	            	<hr>
	            	<?php
	            	
            	}
            ?>            
        </div>
        
    </div>
</body>

</html>