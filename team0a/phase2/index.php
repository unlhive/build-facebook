<!DOCTYPE html>
<?php
	$profile_array = array('name'=>'Sourabh', 'passion'=>'Coding', 'dream' =>'World Peace', 'image_source'=>'_img/sourabh.jpg');
	$profile_array2 = array('name'=>'Michael', 'passion'=>'Design', 'dream' =>'iMac', 'image_source'=>'_img/michael.jpg'); 
	$profile_array3 = array('name'=>'Jenna', 'passion'=>'Design', 'dream' =>'iMac', 'image_source'=>'_img/michael.jpg'); 
	$profile_array4 = array('name'=>'Rachel', 'passion'=>'Design', 'dream' =>'ballet', 'image_source'=>'_img/michael.jpg'); 
	$profile_array5 = array('name'=>'Maggie', 'passion'=>'Entrepreneur', 'dream' =>'Happiness', 'image_source'=>'_img/michael.jpg'); 
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
        	<div class="profile">
        		<div id="profile-pic">
                	<img src="<?=$profile_array['image_source']?>" width="160px" height="160px">
	            </div>
	            <div id="profile-info">
	                <p id="profile-name">Name: <?=$profile_array['name']?></p>
	                <p id="profile-passion">Passion: <?=$profile_array['passion']?></p>
	                <p id="profile-dream">Dream: <?=$profile_array['dream']?></p>    
	            </div>
        	</div>
        	
            <div class="clear"></div>
            <hr>
            
            <div class="profile">
        		<div id="profile-pic">
                	<img src="<?=$profile_array2['image_source']?>" width="160px" height="160px">
	            </div>
	            <div id="profile-info">
	                <p id="profile-name">Name: <?=$profile_array2['name']?></p>
	                <p id="profile-passion">Passion: <?=$profile_array2['passion']?></p>
	                <p id="profile-dream">Dream: <?=$profile_array2['dream']?></p>    
	            </div>
        	</div>
           
            <div class="clear"></div>
            <hr>
            
            <div class="profile">
        		<div id="profile-pic">
                	<img src="<?=$profile_array3['image_source']?>" width="160px" height="160px">
	            </div>
	            <div id="profile-info">
	                <p id="profile-name">Name: <?=$profile_array3['name']?></p>
	                <p id="profile-passion">Passion: <?=$profile_array3['passion']?></p>
	                <p id="profile-dream">Dream: <?=$profile_array3['dream']?></p>    
	            </div>
        	</div>
            
            <div class="clear"></div>
            <hr>
            
            <div class="profile">
        		<div id="profile-pic">
                	<img src="<?=$profile_array4['image_source']?>" width="160px" height="160px">
	            </div>
	            <div id="profile-info">
	                <p id="profile-name">Name: <?=$profile_array4['name']?></p>
	                <p id="profile-passion">Passion: <?=$profile_array4['passion']?></p>
	                <p id="profile-dream">Dream: <?=$profile_array4['dream']?></p>    
	            </div>
        	</div>
        	
        	<div class="clear"></div>
            <hr>
            
            <div class="profile">
        		<div id="profile-pic">
                	<img src="<?=$profile_array5['image_source']?>" width="160px" height="160px">
	            </div>
	            <div id="profile-info">
	                <p id="profile-name">Name: <?=$profile_array5['name']?></p>
	                <p id="profile-passion">Passion: <?=$profile_array5['passion']?></p>
	                <p id="profile-dream">Dream: <?=$profile_array5['dream']?></p>    
	            </div>
        	</div>
            
            
        </div>
        
    </div>
</body>

</html>