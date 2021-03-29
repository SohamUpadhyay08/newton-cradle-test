
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= new Roof(370,185,430,50)
	paper = new Bob(227,450,33,33)
	paper2 = new Bob(295,450,33,33)
	paper3 = new Bob(365,450,33,33)
	paper4 = new Bob(435,450,33,33)
	paper5 = new Bob(505,450,33,33)
	rope1 = new Rope(paper.body,ground.body,-paperDiameter*2,0)
	//rope1 = new Rope(paper.body,ground.body)
	rope2 = new Rope(paper2.body,ground.body,-paper2Diameter*2,0)
	rope3 = new Rope(paper3.body,ground.body,-paper3Diameter*2,0)
	rope4 = new Rope(paper4.body,ground.body,-paper4Diameter*2,0)
	rope5 = new Rope(paper5.body,ground.body,-paper5Diameter*2,0)
	
	
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ground.display();
  paper.display();
  paper2.display();
  paper3.display();
  paper4.display();
  paper5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


  
  drawSprites();
 
}
function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(paper.body,paper.body.position,{x:-100,y:-100}); } 
} 




