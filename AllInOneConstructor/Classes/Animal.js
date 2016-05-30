function Animal(name){
  this.name = name;
  this.hunger = 0;
  this.eat = function(){
    console.log(this.name + " is eating");
    this.hunger -= 10;
  }

  this.run = function(length){
    console.log(this.name + " is running");
    this.hunger += length;
  }
}
