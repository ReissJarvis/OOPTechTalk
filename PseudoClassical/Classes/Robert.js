function Robert(settings){
  settings.clubs = settings.clubs || [];
  settings.clubs.push("Board Games");

  EtechDeveloper.call(this, settings);
}

Robert.prototype.forceTechTalk = function(developer){
  if(!developer instanceof EtechDeveloper){
    throw "This isnt a developer!"
  }
  alert("What Tech Talk is " + developer.name + " doing?!?!?!?");
}
