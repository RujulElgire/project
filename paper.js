class Paper {
    constructor(x, y) {
      var options = {
        'density':1.2,
        'friction': 0,
        'restitution':0.3
      };
      this.x=x;
      this.y=y;
      this.width = 20;
      this.height = 20;
      this.image = loadImage("paper.png")
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
     
      rectMode(CENTER)
      imageMode (CENTER)
      //rect(0, 0, this.width, this.height);
      image(this.image,0,0,70,70)
      pop();
    };
  };