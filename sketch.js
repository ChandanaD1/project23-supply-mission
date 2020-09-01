var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var leftred, rightred, bottomred;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	bottomred = createSprite(400,665,150,10);
	bottomred.shapeColor = "red";

	leftred = createSprite(320,630,10,80);
	leftred.shapeColor = "red";

	rightred = createSprite(480,630,10,80);
	rightred.shapeColor = "red";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground)
	 
	bottomred = Bodies.rectangle(width/2, 655, 200, 10 , {isStatic:true} );
 	World.add(world, bottomred)
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;

  bottomred.y = bottomred.position.y;

  if(packageSprite.y - bottomred.y < packageSprite.height/2 + bottomred.height/2) {
	Matter.Body.setStatic (packageBody,true);
  }

  drawSprites();
 
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
	packageSprite.velocityY = 3;
	Matter.Body.setStatic (packageBody,false);
  }
}



