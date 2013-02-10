
function draw(level){
	
		gfx.strokeStyle=level.color; // make the canvas draw the level the correct color. 
		gfx.lineWidth=5; // make the stroke thicker
		gfx.strokeRect(0,0,level.width,level.height); //draw the boarder around the map. 
	
		gfx.save(); // save the canvas state.
		var pp = player.GetPosition(); //get player position. (you wont always have gotten it before. usually i do it here.)
		var px = pp.x*scaleup; // change the scale. 
		var py = pp.y*scaleup;

		gfx.translate(px, py); // move canvas to player. 
		
		gfx.rotate(player.GetAngle()); //rotate canvas to players rotation.
		if(upisdown){ 
		gfx.drawImage(brobotflameimg, -55, -31); //draw image with flame if thrusting. 
		}else{
		gfx.drawImage(brobotimg, -55, -31);
		};
		gfx.restore(); // return canvas to previous state. 

		//draw the start platform. 
		gfx.drawImage(start, level.start.x-(2.2*scaleup), level.start.y+(2.5*scaleup));
		//draw the finish platform. 
		gfx.drawImage(finish, level.finish.x-(2.2*scaleup), level.finish.y+(2.5*scaleup));


		//draw all of the balls. 
		for(var i = 0; i < level.balls.length; i++){
				 
			gfx.fillStyle = level.color;   // set fill style. 
			gfx.beginPath(); //start path to draw a circle. 
			 
			var position = balls[i].GetPosition(); //get the position of the ball. 
			 
			 
			 //draw arc based on radius and position.
			gfx.arc(position.x*scaleup, position.y*scaleup, level.balls[i].radius, 0, 2 * Math.PI, false);
			
			// fill the path. 
      		gfx.fill();
			
			};
			
			
		for(var i = 0; i < level.obstacles.length; i++){

			
			//draw all the rectangles for the obstacles. 
			gfx.fillRect(level.obstacles[i].x, level.obstacles[i].y, level.obstacles[i].width, level.obstacles[i].height);	

			};
			
		
		// draw the front most part of the robot for layering purposes. 
		gfx.save();

		gfx.translate(px, py);
		
		gfx.rotate(player.GetAngle());

		if(playerDead == true){
			
		gfx.drawImage(dead, -55, -31);	
			
			}else{

		gfx.drawImage(brobothead, -55, -31);
		
		
		};
		gfx.restore();	
	
	};