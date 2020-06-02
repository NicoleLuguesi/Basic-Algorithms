function titleCase(str) {

  var newSentence = str.toLowerCase().split(" ");

 //console.log(newSentence);

  for (var i=0; i<newSentence.length; i++){
    var capitilizedFirst = newSentence[i].split("");
    capitilizedFirst[0] = capitilizedFirst[0].toUpperCase();
    newSentence[i] = capitilizedFirst.join("")
    //console.log(newSentence);
  }
  //console.log(newSentence);
  
  
  return newSentence.join(" ");

}

titleCase("I'm a little tea pot");