

	//listen for contacts. 

	listener = new Box2D.Dynamics.b2ContactListener;

    listener.BeginContact = function(contact) {
		
		var fixA = contact.GetFixtureA().GetUserData();
		var fixB = contact.GetFixtureB().GetUserData();

         if (( fixA == 'wall' && fixB == 'playerBody') || (fixB == 'wall' && fixA == 'playerBody')){
            lose();
		 };
		 
         if ( fixA == 'rightLeg' && fixB == 'finish'){
			 
			 rightLegDown = true;
			 
			 };
		 if (fixA == 'finish' && fixB == 'rightLeg'){
			 
            rightLegDown = true;
		 };
		 
		   if ( fixA == 'leftLeg' && fixB == 'finish'){
			 
			leftLegDown = true;
			 
			 };
		 if (fixA == 'finish' && fixB == 'leftLeg'){
			 
            leftLegDown = true;
		 };
		 
		 
		 
             };

    listener.EndContact = function(contact) {
		
		var fixA = contact.GetFixtureA().GetUserData();
		var fixB = contact.GetFixtureB().GetUserData();
		
       if ( fixA == 'rightLeg' && fixB == 'finish'){
			 
			 rightLegDown = false;
			 
			 };
		 if (fixA == 'finish' && fixB == 'rightLeg'){
			 
            rightLegDown = false;
		 };
		 
		   if ( fixA == 'leftLeg' && fixB == 'finish'){
			 
			leftLegDown = false;
			 
			 };
		 if (fixA == 'finish' && fixB == 'leftLeg'){
			 
            leftLegDown = false;
		 };
		 
		 };