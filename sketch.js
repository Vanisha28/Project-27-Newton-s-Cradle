const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var bob1,bob2,bob3,bob4,bob5,roof;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(900,500);
    engine = Engine.create();
    world = engine.world;
  roof = new Roof(450,65,500,20)
  bob1=new Bob(250,280,50);
	bob2=new Bob(350,280,50);
	bob3=new Bob(450,280,50);
	bob4=new Bob(550,280,50);
  bob5=new Bob(650,280,50);
  
  rope1=new Rope(bob1.body,{x:250,y:80})
  rope2=new Rope(bob2.body,{x:350,y:80})
  rope3=new Rope(bob3.body,{x:450,y:80})
	rope4=new Rope(bob4.body,{x:550,y:80})
	rope5=new Rope(bob5.body,{x:650,y:80})
  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  roof.display();

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()	
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  drawSprites();
  Engine.update(engine)
 
}
function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-500,y:-500});
  }
}




