class Dustbin {
    constructor(x , y, width , height){
        var options = {
            isStatic: true 
        }
        this.body = Bodies.rectangle(x, y, width, height, options );
        this.width = width;
        this.height = height;
        this.image = loadImage("dustbingreen(1).png");

        World.add(world,this.body);
       
    }
    display(){
      push();
      var pos = this.body.position;
      rectMode(CENTER);
      rect(pos.x , pos.y,this.width, this.height);
     // fill("red");

      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();


    }


};
