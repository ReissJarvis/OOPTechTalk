function Bird(name, canFly){
  var parentRun; // private variable.

  Animal.apply(this, arguments);

  parentRun = this.run;

  this.canFly = (canFly === 'true'); //turn string into bool. empty string will cause this to be true aswell
  this.isFlying = false;

  this.run = function(length){
    if(!this.isFlying){
      parentRun.apply(this, length);
    } else {
      console.log("Can't run when your flying")
    }
  }

  this.fly = function(length){
    if(canFly){
      this.hunger += length;
      this.isFlying = true;
      console.log(this.name + " is flying");
      return;
    }
    console.log("This bird tried to fly but it failed.")
  }
  this.land = function(){
    if(!this.isFlying){
    this.isFlying = false;
    console.log(this.name + " has landed");
    return;
  }
  console.log("This bird is already on land!")
  }
}
