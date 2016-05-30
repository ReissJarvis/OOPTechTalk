function Robert(settings){
  settings.clubs = settings.clubs || [];
  settings.clubs.push("Board Games");

  EtechDeveloper.apply(this, arguments);
}

Robert = Object.create(EtechDeveloper.prototype);

Robert.prototype.forceTechTalk = function(developer){
  if(!developer instanceof EtechDeveloper){
    throw "This isnt a developer!"
  }
  alert("What Tech Talk is " + developer.name + " doing?!?!?!?");
}
