$(document).ready(function(){
  console.log("ready");

  var randomColors = [];
  var myColors = ["red","blue","yellow","green"];

// $("#start").on("click",function(){
//
//   function randomNumber(){
//     return Math.floor(Math.random() * myColors.length)
//   }
//
//   for (i=0; 1<4; i++){
//     randomColors.push(myColors[randomNumber()]);
//   }
//   console.log("This array is"+randomColors);
// })

// function that loops through array and prints out the color
function colorPicker(){
  var counter = 0;
  var myInterval = setInterval(function(){
    randomNumber();
    // debugger;
    counter += 1;

    for (i=0; 1<4; i++){
      randomColors = myColors[i];
      console.log(randomColors);
    }


    if (counter === 4) {
      clearInterval(myInterval);
    }

  }, 1500);
}
colorPicker();

function randomNumber(){

    var number = Math.floor(Math.random() * 4);
    // return number;

    console.log(number);

}
// randomNumber();

// add a reset button
$("#reset").click(function(){
  location.reload();
})
















































  // global variables
  // var userSequence = [];
  // var computerSequence = [];
  // var score = 0

  // start the sequence when user clicks the start button
  // $("#start").on("click",function(){
  //   console.log("I have been clicked");
  //   score++;
  //   // call the startSequence function
  //   startSequence();
  //
  // })

  // function startSequence(){
  //   console.log("This is score: " + score);
  //   // target my score to update
  //   $("#score").text(score);
  //   // call my function randomNumber
  //   randomNumber();
  //   var i = 0;
  //   var interval = setInterval(function () {
  //     var id = computerSequence[i];
  //     var color = $("#"+id).attr("class");
  //     console.log("This is the id:"+id+" this is the color:"+color);
  //     addingTempClass(id,color);
  //     i++;
  //     if (i === computerSequence.length){
  //       clearInterval(interval);
  //     }
  //   }, 1000);
  // }
  //
  // // function that uses math.random to get random sequence.
  // function randomNumber() {
  //   var randNum = Math.floor(Math.random() * 4);
  //   // push random number to computerSequence
  //   computerSequence.push(randNum);
  // }
  //
  // // add class in the start sequence
  // function addingTempClass(id,color) {
  //   $("#"+id).addClass("on");
  //   setTimeout(function({
  //     $("#"+id).removeClass("on");
  //   },500)
  // }
















})
