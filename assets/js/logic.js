// Click listener for start Timer
var startButton = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
var questionsScreen = document.querySelector("#questions");
var endScreen = document.querySelector("#end-screen");
var questions = document.querySelector("#questions");
var choices = document.querySelector("#choices");
// create variables for question title and choices

var qIndex = 0;

// Timer Variables
var time=10;
var timer = document.querySelector("#time");
var timerInterval;

// Start Function
    //Question needs to appear
    // Start screen to be hidden
    //timer is started

function start (){
startScreen.classList.add("hide")
questionsScreen.classList.remove("hide")

timer.textContent=time

timerInterval=setInterval(function(){
    time--;
    timer.textContent=time

    if(time<=0){
        end()
    }

} , 1000)

// call function to populate first question
populateQuestion()

}

function populateQuestion() {

    // Populate question title

    // populate question choices
}

function end(){
    // stop the timer
    clearInterval(timerInterval)

    questionsScreen.classList.add("hide")
    endScreen.classList.remove("hide")

}


startButton.addEventListener("click", start)