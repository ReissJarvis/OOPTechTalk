define(["./Animal"], function(Animal) {
    function Bird(name, canFly) {
        var bird = Animal(name);
        parentRun = bird.run;

        bird.canFly = (canFly === 'true'); //turn string into bool. empty string will cause this to be true aswell
        bird.isFlying = false;

        bird.run = function(length) {
            if (!this.isFlying) {
                parentRun.apply(this, length);
            } else {
                console.log("Can't run when your flying")
            }
        }

        bird.fly = function(length) {
            if (canFly) {
                bird.hunger += length;
                bird.isFlying = true;
                console.log(bird.name + " is flying");
                return;
            }
            console.log("This bird tried to fly but it failed.")
        }
        bird.land = function() {
            if (!this.isFlying) {
                bird.isFlying = false;
                console.log(this.name + " has landed");
                return;
            }
            console.log("This bird is already on land!")
        }
        return bird;
    }
    return Bird;
});
