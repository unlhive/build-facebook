


 function moveBot(){
			   
			   // apply gravity to bRobot since the rest of the world doesn't have it.
			   
			   player.ApplyForce(new b2Vec2(0,50), player.GetWorldCenter());
			  
			  // speed of natural slow down of rotation. 
			    player.SetAngularDamping(.5);
			   
	 
		  if(rightisdown == true){
				 
				 //if right is down adjust angular velocity
				var v = player.GetAngularVelocity()
				player.SetAngularVelocity(v+.05);	 

				 };
				 
		 if(leftisdown == true){
				 
				// do same for left.
				var v = player.GetAngularVelocity()
				player.SetAngularVelocity(v-.05);

				 };
        if(upisdown == true){	
	 
	 		// apply thrust in the direction the bot is facing. A combination of my functions and box2d's. 
			player.ApplyForce(getPointOnCircle(player.GetAngle(), boost), player.GetWorldCenter());
	
		};

		  };
		  

		
	