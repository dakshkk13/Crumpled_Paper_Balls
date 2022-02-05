
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var ground;
var right, left;
var button2;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	button2 = createImg('push.png');
	button2.position(20,30);
	button2.size(50,50);
	button2.mouseClicked(hvForce);
	//Create the Bodies Here.

	// ground = new Ground (200,320,400,20);
	ground = new Ground(390,320,790,20);
	right = new Ground(470,280,10,80);
	left = new Ground(500,280,10,80);
	var ball_options = {
		restitution : 0.75
	}

	ball = Matter.Bodies.circle(200,100,20,ball_options);
	World.add(world,ball);


	// rectMode(CENTER);
	ellipseMode(RADIUS);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(4);
  

  ellipse(ball.position.x,ball.position.y,20);

  ground.show();
  right.show();
  left.shhow();

  drawSprites();
 Engine.update(engine);
}


function hvForce(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.85,y:-0.85});
}
