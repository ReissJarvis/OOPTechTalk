(function(){

  var unidentifiedAnimal = new Animal("unknown");

  var eagle = new Bird("Eddie", true);

  //unidentifiedAnimal.fly(); This will error due to it not having the method

  unidentifiedAnimal.run(20);
  unidentifiedAnimal.eat();
  console.log(unidentifiedAnimal.hunger);

  eagle.fly(20);
  eagle.run(10);
  eagle.land();
  eagle.eat();

  console.log(eagle instanceof Animal);
}())
