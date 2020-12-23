
const Engine = Matter.Engine;
 const World = Matter.World; 
 const Bodies = Matter.Bodies;
  const Body = Matter.Body;
   var ball1, ground, line1,line2 ,line3; 

function preload() {

 }
 function setup() { 
	 var canvas= createCanvas(800, 700); 
	 engine = Engine.create();
	  world = engine.world; 
	  //Create the Bodies Here. 
	Engine.run(engine);
	 ball1 =new Paper(150,350,20)
	 
	 ground=new Ground(400,680,800,10);
	
	line1=new Line(600,670,100,10);
	line2=new Line(555,625,10,100);
	line3=new Line(650,625,10,100);
	
	} 
	 function draw() { 
		 rectMode(CENTER); 
		 background(0);
		  Engine.update(engine);
		   drawSprites();
			ball1.display();
			ground.display();
		line1.display(); 
		line2.display();
		line3.display();
		}
		function keyPressed(){
if(keyCode===UP_ARROW){
	Matter.Body.applyForce(ball1.body,ball1.body.position,{x:55,y:-55})
}

		}