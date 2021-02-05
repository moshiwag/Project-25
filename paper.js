/*class Paper {
    constructor(x,y,radius) {
      var options = {
          isStatic: false,
          restitution: 0.3,
          friction: 0.5,
          density: 1.2,
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = this.radius;
      World.add(world, this.body);
    }

    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill("white");
      ellipseMode(RADIUS);
      circle(0,0,this.radius);
      pop();
    }
  };*/


  class Paper{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5, 
			density:1.2	
		}
		this.x=x;
		this.y=y;
    this.r=r
    this.image=loadImage("paper.png");
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{	
		var paperpos=this.body.position;		
		push();
		translate(paperpos.x, paperpos.y);
		rectMode(CENTER)
    fill(255,0,255)
    imageMode(CENTER);
		image(this.image, 0,0,this.r, this.r)
    //ellipseMode(RADIUS);
		//circle(0,0,this.r/2);
		pop();
  }
}  
  