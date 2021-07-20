class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1, 200, 20);
        image(this.sling2,170,20)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();      
//stroke(255, 0, 0);
stroke("red");
        if(pointA.x<220){
            strokeWeight(4);
           line(pointA.x, pointA.y, pointB.x+25, pointB.y);
            line(pointA.x, pointA.y, pointB.x-10, pointB.y);
            image(this.sling3,pointA.x-10,pointA.y-20,30,15);
        }
        else{
            strokeWeight(4);
           line(pointA.x, pointA.y, pointB.x+25, pointB.y);
            line(pointA.x, pointA.y, pointB.x-10, pointB.y);
            image(this.sling3,pointA.x-10,pointA.y-20,30,15); 
        }
        pop();
    }
    }
    
}