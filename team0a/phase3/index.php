<!DOCTYPE html>
<?php
	/*
	$profile_array = array('name'=>'Sourabh', 'passion'=>'Coding', 'dream' =>'World Peace', 'image_source'=>'_img/sourabh.jpg');
	$profile_array2 = array('name'=>'Michael', 'passion'=>'Design', 'dream' =>'iMac', 'image_source'=>'_img/michael.jpg'); 
	$profile_array3 = array('name'=>'Jenna', 'passion'=>'Design', 'dream' =>'iMac', 'image_source'=>'_img/michael.jpg'); 
	$profile_array4 = array('name'=>'Rachel', 'passion'=>'Design', 'dream' =>'ballet', 'image_source'=>'_img/michael.jpg'); 
	$profile_array5 = array('name'=>'Maggie', 'passion'=>'Entrepreneur', 'dream' =>'Happiness', 'image_source'=>'_img/michael.jpg'); 
	*/
	
	$profile_array_nested = array(
									array('name'=>'Sourabh', 'passion'=>'Coding', 'dream' =>'World Peace', 'image_source'=>'_img/sourabh.jpg'),
									array('name'=>'Michael', 'passion'=>'Design', 'dream' =>'iMac', 'image_source'=>'_img/michael.jpg'),
									array('name'=>'Jenna', 'passion'=>'Design', 'dream' =>'iMac', 'image_source'=>'_img/michael.jpg'),
									array('name'=>'Rachel', 'passion'=>'Design', 'dream' =>'ballet', 'image_source'=>'_img/michael.jpg'),
									array('name'=>'Maggie', 'passion'=>'Entrepreneur', 'dream' =>'Happiness', 'image_source'=>'_img/michael.jpg')
								);	
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