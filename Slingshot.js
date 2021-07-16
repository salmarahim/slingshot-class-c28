class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.Slingshot = Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.Slingshot);
    }

    display(){
       
        if(this.Slingshot.bodyA){
        strokeWeight(10);
      
        line(this.Slingshot.bodyA.position.x,this.Slingshot.bodyA.position.y,
            this.pointB.x,this.pointB.y )
        }

    }
    fly(){
        this.Slingshot.bodyA=null
    }
}