function EtechDeveloper(developerSettings){
  if(!Array.isArray(developerSettings.languages)){
    throw "Languages is not an array";
  }

  if(!Array.isArray(developerSettings.clubs)){
    throw "clubs is not an array";
  }

  this.name = developerSettings.name;
  this.languages = developerSettings.languages || []
  this.clubs = developerSettings.clubs || []
}

EtechDeveloper.prototype.addClub = function(club) {
  if(typeof club != "string"){
    throw "Club needs to be string";
  }

  this.clubs.push(club);
};

EtechDeveloper.prototype.removeClub = function(club) {
  this.clubs.splice(this.clubs.indexOf(club), 1);
};

var reiss = new EtechDeveloper({
  name: "Reiss",
  languages:["Javascript", "C#"]
});

reiss.addClub("Cinema");
console.log(reiss.clubs)// ["Cinema"]
