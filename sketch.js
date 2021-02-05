const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinObj, paperObject,groundObject;
var world, engine;

function preload()
{

}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	dustbinObj=new Dustbin(1200,650);
	paperObject=new Paper(200,450,70);
	groundObject=new Ground(width/2,670,width,20);

	Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  
  dustbinObj.display();
  paperObject.display();
  groundObject.display();
}


function keyPressed() {
	if (keyCode === UP_ARROW ) {
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:140,y:-145});
	}
}
