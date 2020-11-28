class Tree {
    constructor(x, y, width, height) {
        var options = {
            isStatic:true,
        }
        this.x = x;
        this.y = y;
        this.body = Bodies.rectangle(this.x, this.y, width, height, options);
        this.width = 400;
        this.height = 400;
        this.image = loadImage ("Plucking mangoes/tree.png");
    
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
    }