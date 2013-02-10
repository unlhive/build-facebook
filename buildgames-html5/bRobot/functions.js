

/*this is where I stick stuff I use a lot.*/


function getPointOnCircle(angle, radius){

			 // from box2d in rad. 
			
			angle -= Math.PI * .5; // Offset -90 deg so that starting point is straight up instead of to the right. 

			var x = Math.round(radius * Math.cos(angle)); //find x point on circle with witchcraft.
			var y = Math.round(radius * Math.sin(angle)); //do the same for y point.
			
			var vec = new b2Vec2(x,y); //create box2d vector object based our newly calculated x and y.
			
			return vec; //send back object. 			
			
};

		
		
function makeShape(points){
	
			/*
			box2d uses objects hold sets of x and y values. 
			I like to write my points differently than that. 
			This is the function to convert from one form 
			to the other. sorry. 
			*/
	
	
			// for loop set so that all points in an array are processes. 
			for (var i = 0; i < points.length; i++) {
			
			//make variable to send back.
			var vec = new b2Vec2(); //box2dweb
			vec.Set(points[i].x * scaledown, points[i].y * scaledown);// set points of object.
			points[i] = vec; // replace spot in array with new object		
			
			};
			
			return points; // return reformatted array. 
	
	};
	
	
	var count = 0; // set variable to checking if someone has been on the finish long enough. 
	
function checkWin(){

	if(leftLegDown == true && rightLegDown == true){ //check if both legs are on the platform. hittests.js controls this
		
		count++; // if they're down start count.
		
		if(count > landTime){ //compair time to number set ealier in gobal variable area. 
		
			win();	// win function definded later
		
		};
		
		}else{
			
			count = 0; // if the legs come off reset the count. 
			
			};
	
	};
	
// function to run if a person loses. by hitting a wall.	
function lose(){  //hittests.js
	
	clearInterval(run);//stop animating world. 
	
	$(document).off();// turn off game controls. 
	
	playerDead = true; // tell the rest of the world you've lost
	
	$("#lose").css("display","block"); // show lose menu
	
	};
	
function win(){

	playerWin = true; // tell the world you've won!! 
	
	clearInterval(run); // stop the game. 
	
	alert("you win!"); // annoying pop up alert.

	$("#mainMenu").css("display","block"); // show main menu. 
	
	};
	
	
// function to create a menu based on the array of levels that are stored. 	
function generateMenu(levels){
	
	
	//for loop for a complete array. 
	for (var i = 0; i < levels.length; i++) { // levels.js
		
		// add a div the the main menu. color is the levels color. tell it to run init() and start level when clicked. 
		$("#mainMenu").append("<div class='level' style='background-color:"+levels[i].color+";' onClick='init(levels["+i+"])'>"+(i+1)+"</div>");
		
		};
	
	
	};
	
	// simple menu navigation. 
	
	function quit(){
		
		$("#lose").css("display","none");

		$("#mainMenu").css("display","block");

		};