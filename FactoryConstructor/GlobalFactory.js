require(["Classes/Animal", "Classes/Bird"], function(Animal, Bird) {
    var unidentifiedAnimal = Animal("unknown");

    var eagle = Bird("Eddie", true);

    //unidentifiedAnimal.fly(); This will error due to it not having the method

    unidentifiedAnimal.run(20);
    unidentifiedAnimal.eat();
    console.log(unidentifiedAnimal.hunger);

    eagle.fly(20);
    eagle.run(10);
    eagle.land();
    eagle.eat();

    console.log("Is Eagle a type of animal : " + (eagle instanceof Animal).toString());
});
