// get the id for div timer
var timer = document.querySelector(".timer");
// get the id for span for the time
var time = document.querySelector("#time");
// get the id for end screen
var endScreen = document.querySelector("#end-screen");
// get the id for the start screen
var startscreen =document.querySelector("#start-screen")
// get the id for the questions
var questionsEl = document.querySelector("#questions");

var finalScore = document.querySelector("#final-score");
// set start time for timer
var timeLeft = 80;

// Global declaration varialbe timer interval.
var timerInt;
// Get the start button id.
// Set the event listener for the button to start the timer.
start = document.querySelector("#start").addEventListener("click", function setTime() {
    // Set the interval in a variable.
    sendMessage();
    var timerInt = setInt(function (){
    // set to reduce the timer
    timeLeft --;
    // put the timer on the screen.
    timer.textContent = "Time: " + timeLeft;
    
    // check to see if the timer has run out.
    if (timeLeft === 0) {
        clearInterval(timerInt);
        questionsEl.classList.remove("scores") ;
        questionsEl.classList.add("hide");
        endScreen.classList.remove("hide");
        endScreen.classList.add("scores");
    }
}, 1000); // sets the speed of the timer in milliseconds.
}
);

function sendMessage() {
    startscreen.classList.remove("start");
    startscreen.classList.add("hide");
    questionsEl.classList.remove("hide");
    questionsEl.classList.add("scores");
  }

  