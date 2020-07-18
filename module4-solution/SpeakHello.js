
(function(window){
	
	var helloSpeaker = {};
	var speakWord = "Hello";
	helloSpeaker.SpeakHello = function (name) {
  	console.log(speakWord + " " + helloSpeaker.name);
	}

	window.helloSpeaker = helloSpeaker;

})(window);

