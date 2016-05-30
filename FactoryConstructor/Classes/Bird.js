function Bird(name, canFly){
  var bird = Animal(name);
  parentRun = bird.run;

  bird.canFly = (canFly === 'true'); //turn string into bool. empty string will cause this to be true aswell
  bird.isFlying = false;

  bird.run = function(length){
    if(!this.isFlying){
      parentRun.apply(this, length);
    } else {
      console.log("Can't run when your flying")
    }
  }

  bird.fly = function(length){
    bird.hunger += length;
    bird.isFlying = true;
    console.log(bird.name + " is flying");
  }
  bird.land = function(){
    bird.isFlying = false;
    console.log(bird.name + " has landed");
  }

  return bird;
}
