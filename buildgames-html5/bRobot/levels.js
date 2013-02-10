
// make levels array. 

// use arrays [] to hold values that are all the same kind of data and object {} for those that need to be named. 


levels = [
			{
			 height: 786,
			 width: 1500,
			 start: {x:100, y:400},
			 finish: {x:1300, y:600},
			 color:"#f0f",
			 
			 obstacles: [
			 {x:200, y:450, height: 20, width: 100},
			 {x:300, y:200, height: 50, width: 50}, 
			 {x:600, y:500, height: 70, width: 30}
			 ],
			 
			 balls: [
			 {x:300, y:700, speed:20, angle:Math.random()*Math.PI*2, radius: 30, name:"normal"},
			 {x:500, y:500, speed:10, angle:Math.random()*Math.PI*2, radius: 15, name:"normal"},
			 ]
			 },
			 
			 {
			 height: 786,
			 width: 1500,
			 start: {x:100, y:400},
			 finish: {x:1300, y:600},
			 color:"#00f",
			 
			 obstacles: [
			 {x:300, y:450, height: 60, width: 100},
			 {x:700, y:300, height: 80, width: 50}, 
			 {x:400, y:200, height: 70, width: 10}
			 ],
			 
			 balls: [
			 {x:300, y:700, speed:20, angle:Math.random()*Math.PI*2, radius: 30, name:"normal"},
			 {x:500, y:500, speed:10, angle:Math.random()*Math.PI*2, radius: 15, name:"normal"},
			 ]
			 },
			 
			 
			 {
			 height: 786,
			 width: 1500,
			 start: {x:100, y:400},
			 finish: {x:1300, y:600},
			 color:"#c00",
			 
			 obstacles: [
			 {x:200, y:450, height: 20, width: 100},
			 {x:300, y:200, height: 50, width: 50}, 
			 {x:600, y:500, height: 285, width: 30}
			 ],
			 
			 balls: [
			 {x:700, y:510, speed:30, angle:Math.PI*.5, radius: 15, name:"wall"},
			 ]
			 },
			 {
			 height: 786,
			 width: 1500,
			 start: {x:100, y:400},
			 finish: {x:1300, y:600},
			 color:"#c00",
			 
			 obstacles: [
			 {x:200, y:450, height: 20, width: 100},
			 {x:300, y:200, height: 50, width: 50}, 
			 {x:600, y:500, height: 285, width: 30}
			 ],
			 
			 balls: [
			 {x:700, y:510, speed:30, angle:Math.PI*.5, radius: 15, name:"wall"},
			 ]
			 },
			 {
			 height: 786,
			 width: 1500,
			 start: {x:100, y:400},
			 finish: {x:1300, y:600},
			 color:"#c00",
			 
			 obstacles: [
			 {x:200, y:450, height: 20, width: 100},
			 {x:300, y:200, height: 50, width: 50}, 
			 {x:600, y:500, height: 285, width: 30}
			 ],
			 
			 balls: [
			 {x:700, y:510, speed:30, angle:Math.PI*.5, radius: 15, name:"wall"},
			 ]
			 },
			 {
			 height: 786,
			 width: 1500,
			 start: {x:100, y:400},
			 finish: {x:1300, y:600},
			 color:"#c00",
			 
			 obstacles: [
			 {x:200, y:450, height: 20, width: 100},
			 {x:300, y:200, height: 50, width: 50}, 
			 {x:600, y:500, height: 285, width: 30}
			 ],
			 
			 balls: [
			 {x:700, y:510, speed:30, angle:Math.PI*.5, radius: 15, name:"wall"},
			 ]
			 }

]


generateMenu(levels); //make the menu! 