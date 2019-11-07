// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW

var userChoice = ""
var computerChoice = ""
var winner= ""
var computerChoice = ""
$("#shoot").click(function() {
var userChoice = $("input").val();
$("#userChoice").append(userChoice);

 computerChoice = Math.random();
console.log(computerChoice);
if (computerChoice > .80){
  $("#computerChoice").html("rock");
}
else if (computerchoice > .60){
  $("#computerChoice").html("paper");
}
else{
  $("#computerChoice").html("scissors");
}
});
