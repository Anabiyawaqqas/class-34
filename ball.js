class ball {
    constructor(x,y,w,h,angle)
    {
  var options=
  {
      density:1,
      frictionAir:0.005

  }
  this.body=Bodies.rectangle(x,y,w,h,angle)
  this.w=w
  this.h=h
  World . add (world,this.body)

    }
    display()
{
    var angle=this.body.angle
    push()
    translate(this.body.position .x,this.body.position.y)
    rotate(angle)
    ellipse(0,0,this.w,this.h)
    pop ()
}

}