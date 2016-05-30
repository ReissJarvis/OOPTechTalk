function Animal(name){
  var name = name;
  var hunger = 0;
  var eat = function(){
    console.log(this.name + " is eating");
    this.hunger -= 10;
  }

  var run = function(length){
    console.log(this.name + " is running");
    this.hunger += length;
  }

  return {
    name:name,
    hunger:hunger,
    eat:eat,
    run:run
  }
}
