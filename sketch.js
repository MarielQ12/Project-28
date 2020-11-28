
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, tree, stone, boy;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7


function preload(){
	boy1 = loadImage("Plucking mangoes/boy.png")
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400, 690, 800, 15);
	tree = new Tree(650, 500, 1, 1);
	
	boy = createSprite(220, 550, 200, 300);
	boy.addImage(boy1);
	boy.scale = 0.15;
	boy.debug = true;
	stone = new Stone(145, 465);
	slingshot = new Slingshot (stone.body,{x:145, y:465});

	mango1 = new Mango (1000,250)
	mango2 = new Mango (1050,300)
	mango3 = new Mango (1050,250)
	mango4 = new Mango (1100,250)
	mango5 = new Mango (1150,175)
	mango6 = new Mango (1200,200)
	mango7 = new Mango (1200,300)

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
  ground.display()
  tree.display()
  stone.display()
  slingshot.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()

  //detectCollision(stone,mango1)
  //detectCollision(stone,mango2)
  //detectCollision(stone,mango3)
  //detectCollision(stone,mango4)
  //detectCollision(stone,mango5)
  //detectCollision(stone,mango6)
  //detectCollision(stone,mango7)

  text(mouseX+ "," + mouseY , mouseX, mouseY)
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY})
}

function mouseReleased(){
	slingshot.fly()
}

function keyPressed(){
	if (keyCode===32){
		slingshot.attach(stone.body)
	}

}

function detectCollision(stone1, mango){
	mangoBodyPosition = mango.body.position;
	stoneBodyPosition = stone1.body.postion;
	
	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
		if(distance<=mango.width/2+stone1.width/2){
			Matter.Body.setStatic (mango.body, false)
		}
}
