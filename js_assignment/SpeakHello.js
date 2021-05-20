
// DO NOT attach the speakWord variable to the 'helloSpeaker' object.
( function (window){
  speakWord = "Hello"
  var helloSpeaker = new Object();
  
  helloSpeaker.speak = function(name){
      console.log(speakWord + " " + name);
  }

  window.helloSpeaker = helloSpeaker;
})(window);


