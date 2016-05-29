function Robert(settings){
  settings.Clubs = settings.Clubs || [];
  settings.Clubs.push("Board Games");

  EtechDeveloper.call(this, settings);
}

Robert.prototype.forceTechTalk = function(developer){
  if(!developer instanceof EtechDeveloper){
    throw "This isnt a developer!"
  }
  alert("What Tech Talk is " + developer.name + " doing?!?!?!?");
}
