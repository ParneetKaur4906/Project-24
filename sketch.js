
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var dustbin;
var ground;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(0,780,800,20);

	paper = new Paper(0,500);
	dustbin1 = new Dustbin(760,500,200,20);
	dustbin2 = new Dustbin(740,500,20,100);
	dustbin3 = new Dustbin(780,500,20,100);


	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  background(0);
  
  ground.display();
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  drawSprites();
 
}



