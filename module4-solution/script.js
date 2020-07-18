// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************

(function(){
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    for (var i = 0; i < names.length; i++) {

        helloSpeaker.name = names[i];
        byeSpeaker.name = names[i];

        var firstLetter = names[i].charAt(0);
        var res = firstLetter.toLowerCase();

        if (res == "j") {

          byeSpeaker.SpeakGoodBye(names[i]);

        }
        else {
        helloSpeaker.SpeakHello(names[i]);
        }
    }
})();
