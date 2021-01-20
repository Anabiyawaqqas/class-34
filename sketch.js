const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint =Matter.Constraint

var engine,world 
var box1
function setup() {
  createCanvas(1200,800);
  engine=Engine.create()
  world=engine.world
  ground1=new ground (600,600,1200,20)

  box1 = new box (600,600,400,40)

}

function draw() {
  background("lightblue");  
  Engine.update(engine)


ground1.display()
box1.display()

}