define([], function(){
  function EtechDeveloper(developerSettings){
    this.name = developerSettings.name;
    this.languages = developerSettings.languages || []
    this.clubs = developerSettings.clubs || []

    if(!Array.isArray(this.languages)){
      throw "Languages is not an array";
    }

    if(!Array.isArray(this.clubs)){
      throw "clubs is not an array";
    }
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
  return {
    EtechDeveloper:EtechDeveloper
  }
});
