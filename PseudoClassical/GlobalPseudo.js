require(['Classes/EtechDeveloper', 'Classes/Robert'], function(){
  var reiss = new EtechDeveloper({
    name: "Reiss",
    languages:["Javascript", "C#"]
  });

  reiss.addClub("Cinema");
  console.log(reiss.clubs); // ["Cinema"]

  var robert =  new Robert({
    name:"Robert",
    languages:["Node.js"],
    clubs:["Steak Club"]
  });

  robert.forceTechTalk(reiss);
  console.log(robert.clubs);

  reiss.forceTechTalk(robert); //It will throw an error here
});
