function WorldSetup(level){
	
	
	  b2Vec2 = Box2D.Common.Math.b2Vec2
            ,  b2AABB = Box2D.Collision.b2AABB
         	,	b2BodyDef = Box2D.Dynamics.b2BodyDef
         	,	b2Body = Box2D.Dynamics.b2Body
         	,	b2FixtureDef = Box2D.Dynamics.b2FixtureDef
         	,	b2Fixture = Box2D.Dynamics.b2Fixture
         	,	b2World = Box2D.Dynamics.b2World
         	,	b2MassData = Box2D.Collision.Shapes.b2MassData
         	,	b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape
         	,	b2CircleShape = Box2D.Collision.Shapes.b2CircleShape
         	,	b2DebugDraw = Box2D.Dynamics.b2DebugDraw
            ,  b2MouseJointDef =  Box2D.Dynamics.Joints.b2MouseJointDef
            ;
         
          world = new b2World(
               new b2Vec2(0, 0)    //gravity
            ,  true                 //allow sleep
         );
         
          fixDef = new b2FixtureDef;
         fixDef.density = 1.0;
         fixDef.friction = 0;
          fixDef.restitution = 1;
		 fixDef.userData = "wall";
         
          bodyDef = new b2BodyDef;
         
         //create ground
         bodyDef.type = b2Body.b2_staticBody;
         fixDef.shape = new b2PolygonShape;
		 
		//top		 
         fixDef.shape.SetAsBox(level.width*scaledown*.5, 2);
         bodyDef.position.Set(level.width*scaledown*.5, -2);
         var top = world.CreateBody(bodyDef);
		 top.CreateFixture(fixDef);

         //bottom
		 fixDef.shape.SetAsBox(level.width*scaledown*.5, 2);
         bodyDef.position.Set(level.width*scaledown*.5, level.height*scaledown+2*.5);
         var bottom = world.CreateBody(bodyDef);
		 bottom.CreateFixture(fixDef);
		 
		 //left		 
		 fixDef.shape.SetAsBox(2, level.height*scaledown*.5);
         bodyDef.position.Set(-2, level.height*scaledown*.5);
         var bottom = world.CreateBody(bodyDef);
		 bottom.CreateFixture(fixDef);

         //right
		 fixDef.shape.SetAsBox(2, level.height*scaledown*.5);
         bodyDef.position.Set(level.width*scaledown+2, level.height*scaledown*.5);
         var bottom = world.CreateBody(bodyDef);
		 bottom.CreateFixture(fixDef);
         
         //create some objects
         bodyDef.type = b2Body.b2_dynamicBody;	 
	 
		var playerShape = makeShape([{x: 0, y: -30}, {x: 54, y: 13}, {x: 54, y:30}, {x: -54, y:30}, {x:-54, y:13}]);
		var leftLeg = makeShape([{x: -54, y:30}, {x: -33, y: 30}, {x: -54, y:67}]);
		var rightLeg = makeShape([{x: 54, y:30}, {x: 54, y:67}, {x: 33, y: 30}]);
		var platform = makeShape([{x: 0, y:0}, {x: 135, y:0}, {x: 135, y: 8}, {x: 0, y: 8}]);
		
		var leftLegFix = new b2FixtureDef;
		
		leftLegFix.density = 1.0;
         leftLegFix.friction = 0.5;
         leftLegFix.restitution = 0.2;
		
		leftLegFix.userData = "leftLeg";
		leftLegFix.shape = new b2PolygonShape;
    	leftLegFix.shape.SetAsArray(leftLeg);

		var rightLegFix = new b2FixtureDef;
		
		rightLegFix.density = 1.0;
         rightLegFix.friction = 0.5;
         rightLegFix.restitution = 0.2;
		
		rightLegFix.userData = "rightLeg";
		rightLegFix.shape = new b2PolygonShape;
    	rightLegFix.shape.SetAsArray(rightLeg);
	 
		playerBody = new b2FixtureDef;
		
		 playerBody.density = 1.0;
         playerBody.friction = 0.5;
         playerBody.restitution = 0.2;
		
		playerBody.userData = "playerBody";
        playerBody.shape = new b2PolygonShape;
        playerBody.shape.SetAsArray(playerShape);
          
		bodyDef.position.x = level.start.x*scaledown;
		bodyDef.position.y = level.start.y*scaledown;
		player = world.CreateBody(bodyDef);
		player.CreateFixture(playerBody);
		player.CreateFixture(leftLegFix);
		player.CreateFixture(rightLegFix);
		
		 bodyDef.type = b2Body.b2_staticBody;
		
		var startPlatFix = new b2FixtureDef;
		
		startPlatFix.density = 1.0;
         startPlatFix.friction = 0.5;
         startPlatFix.restitution = 0.2;
		
		startPlatFix.userData = "start";
		startPlatFix.shape = new b2PolygonShape;
    	startPlatFix.shape.SetAsArray(platform);
		
		   
		bodyDef.position.x = level.start.x*scaledown-2.2;
		bodyDef.position.y = level.start.y*scaledown+2.5;
		
		startPlatform = world.CreateBody(bodyDef);
		startPlatform.CreateFixture(startPlatFix);


		var finishPlatFix = new b2FixtureDef;
		
		finishPlatFix.density = 1.0;
         finishPlatFix.friction = 0.5;
         finishPlatFix.restitution = 0.2;
		
		finishPlatFix.userData = "finish";
		finishPlatFix.shape = new b2PolygonShape;
    	finishPlatFix.shape.SetAsArray(platform);
		
		   
		bodyDef.position.x = level.finish.x*scaledown-2.2;
		bodyDef.position.y = level.finish.y*scaledown+2.5;
		
		finishPlatform = world.CreateBody(bodyDef);
		finishPlatform.CreateFixture(finishPlatFix);	
		
		
		 fixDef.userData = "wall";
		
		for(var i = 0; i < level.obstacles.length; i++){

			var wallShape = makeShape([{x: 0, y:0}, {x: level.obstacles[i].width, y:0}, {x: level.obstacles[i].width, y: level.obstacles[i].height}, {x: 0, y: level.obstacles[i].height}]);
				
				
			fixDef.shape = new b2PolygonShape;	
			fixDef.shape.SetAsArray(wallShape);	
			
				
			console.log(level.obstacles[i].x);	
				
			bodyDef.position.x = level.obstacles[i].x*scaledown;
			bodyDef.position.y = level.obstacles[i].y*scaledown;	
				
			var obstacle = world.CreateBody(bodyDef);
			obstacle.CreateFixture(fixDef);	
			
			};
		
		bodyDef.type = b2Body.b2_dynamicBody;	
		
		
			 
		for(var i = 0; i < level.balls; i++){

			var ballForce = getPointOnCircle(Math.random()*Math.PI*2, ballSpeed);
				 
			fixDef.shape = new b2CircleShape(17*scaledown);
				  
			bodyDef.position.x = Math.random()*level.width*scaledown;
			bodyDef.position.y = Math.random()*level.height*scaledown;
			
			var ball = world.CreateBody(bodyDef);
			ball.CreateFixture(fixDef);
			
			ball.ApplyImpulse(ballForce, ball.GetWorldCenter());
			
			
			};
			
 
        
	
	
	};