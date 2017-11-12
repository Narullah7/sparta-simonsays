$(document).ready(function(){
  console.log("ready");

  // global variables
  var userSequence = [];
  var computerSequence = [];
  var score = 0

  // start the sequence when user clicks the start button
  $("#start").on("click",function(){
    console.log("I have been clicked");
    score++;
    // call the startSequence function
    startSequence();

  })

  function startSequence(){
    console.log("This is score: " + score);
    // target my score to update
    $("#score").text(score);
    // call my function randomNumber
    randomNumber();
    var i = 0;
  }

  // function that uses math.random to get random sequence.
  function randomNumber() {
    var randNum = Math.floor(Math.random() * 4);
    // push random number to computerSequence
    computerSequence.push(randNum);
  }
















})
