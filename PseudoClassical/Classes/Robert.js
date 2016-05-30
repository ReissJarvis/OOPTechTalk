define(["./EtechDeveloper"], function(EtechDeveloper) {
  'use strict';
  function Robert(settings) {
      settings.clubs = settings.clubs || [];
      settings.clubs.push("Board Games");

      EtechDeveloper.EtechDeveloper.apply(this, arguments);
  }

  Robert.prototype.forceTechTalk = function (developer) {
      if (!developer instanceof EtechDeveloper.EtechDeveloper) {
          throw "This isnt a developer!";
      }
      alert("What Tech Talk is " + developer.name + " doing?!?!?!?");
  };

  return{
    Robert:Robert
  }
});
