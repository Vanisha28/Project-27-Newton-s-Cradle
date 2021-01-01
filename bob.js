class Bob{
    constructor(x,y,radius){
    
    var options={
    isStatic:false,
    restitution:1,
    friction:0,
    density:1.5,
    }
    
    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius;
    World.add(world,this.body);
    
    }
    display(){
    var angle = this.body.angle;
    push ();
    //translate (this.body.position.x,this.body.position.y);
    //rotate(angle);
    ellipseMode(CENTER);
    ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
    pop ();
    }
    }