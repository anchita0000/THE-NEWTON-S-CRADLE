
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(500, 500);


	engine = Engine.create();
	world = engine.world;

	roof=new Roof(230,150,250,20);

	bob1=new Bob(350,400,50);
	bob2=new Bob(400,400,50);
	bob3=new Bob(450,400,50);
	bob4=new Bob(500,400,50);
	bob5=new Bob(550,400,50);

	rope1=new Rope(bob1.body,roof.body,-25,0);
	rope2=new Rope(bob2.body,roof.body,-25,0);
	rope3=new Rope(bob3.body,roof.body,-25,0);
	rope4=new Rope(bob4.body,roof.body,-25,0);
	rope5=new Rope(bob5.body,roof.body,-25,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  
  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

}
function keyPresses(){
	if(keyCode===32){
Matte.applyForce(bob1.body,bob1.body.position,{x:600,y:0});
	}
}


