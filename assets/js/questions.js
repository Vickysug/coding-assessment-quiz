// Get the ID question-title.
var questionTitle = document.querySelector("#question-title");
var choicesContainer = document.querySelector("#choices");

var questions = [ 
    { 
     
     question: '1. What is JavaScript primarily used for?',
     choices: 
 [
    ' A) Video Editing',
 'B) Building Interactive Web Pages',
 'C) Database Management',
 'D) Graphic Design'],
 answer: 'B) Building Interactive Web Pages'
    },
 
 {
     question: '2. How do you declare a constant variable in JavaScript?',
     choices: 
    [ 
    'A) let',
     'B) const',
     'C) var',
     'D) const and let',
 ],
     answer: 'B) const'
 },
 
 {
 
 question: '3. What is the purpose of the console.log function?',
 choices:
 [
 'A) Connect to a Database',
 'B) Print messages to the console',
 'C) Create a new webpage',
 'D) Define a new function',
 ],
     answer: 'B) Print messages to the console'
 },
 
 {
 question: '4. Which keyword is used to declare a variable with a block scope?',
 choices: [
 'A) var',
 'B) let',
 'C) const',
 'D) Both let and const',
 ],
 
 answer: 'B) let',
 
 },

{
question: '5. How do you write a single-line comment in JavaScript?',

choices: [
'A) /* Comment */',
'B) # Comment',
'C) // Comment',
'D) <!-- Comment -->',

],
answer: 'C) // Comment',

},

{
question: '6. What is the correct way to create an array in JavaScript?',

choices: [
'A) array = [1, 2, 3]',
'B) let array = {1, 2, 3}',
'C) let array = [1, 2, 3]',
'D) array(1, 2, 3)',
],

answer: 'array = [1, 2, 3]',

},


{
question: '7. How do you check if two variables are strictly equal in value and type?',

choices:[
'A) ==',
'B) ===',
'C) =',
'D) !==,'
],

answer:'B) ==='
},


{
question: '8. What does the for loop in JavaScript do?',

choices: [
'A) Executes a block of code repeatedly',
'B) Declares a variable',
'C) Adds two numbers',
'D) Defines a function',
],
answer: 'A) Executes a block of code repeatedly'
},

{
question: '9. What is the purpose of a JavaScript function?',
choices: [
'A) Print messages to the console',
'B) Create a new webpage',
'C) Reuse a block of code for a specific task',
'D) Connect to a database',
],
 answer: 'C) Reuse a block of code for a specific task',
},

{
    question: '10. Which of the following is used to print a message to the console?',
    choices: [
    '- A) print()',
    '- B) log()',
    '- C) display()',
    '- D) console.log()',
    ],
     answer:'D) console.log()',
    }
]
// set global variables.
var score = 0;
var questionsCurrent = 0;

        function showQuestion() {
            var currentQuestion = questions[questionsCurrent];
            questionTitle.textContent = currentQuestion.question;
            var correctAnswer = questions[questionsCurrent].answer;
            
            // Clear previous choices
            choicesContainer.innerHTML = "";
     
            // add the current answers choices to the buttons.
            for (var i = 0; i < currentQuestion.choices.length; i++) {
                var choiceButton = document.createElement("button");
                choiceButton.textContent = currentQuestion.choices[i];
                if (choiceButton.innerText == correctAnswer) {
                    choiceButton.setAttribute("id", "correct");
                } else {
                    choiceButton.setAttribute("id", "wrong");
                }
                choiceButton.addEventListener("click", choiceClick);
                choicesContainer.appendChild(choiceButton);
            }
            const buttons = document.getElementsByTagName("button");
        const buttonPressed = e => {
        if (e.target.id === "correct") {
            var snd = new Audio('./assets/sfx/correct.wav');
            snd.play(); 
        } else if (e.target.id === "wrong"){
            var snd = new Audio('./assets/sfx/incorrect.wav');
            snd.play(); 
            timeLeft -= 10;
        }
        }
        for (let button of buttons) {
        button.addEventListener("click", buttonPressed);
        }
        }
        
 function choiceClick() {
            // Handle the user's choice of answers
            // Move to the next question
            questionsCurrent++;

            // Check if there are more questions
            if (questionsCurrent < questions.length) {
                showQuestion();
            } else {
                clearInterval(timerInt);
                // display a message or perform an action when questions are answered
                questionTitle.textContent = "Quiz completed!";
                choicesContainer.innerHTML = "";

                var score = calculateScore();
            }
        }

        var finalScoreEl = document.getElementById("final-score");
        var initialsInput = document.getElementById("initials");

        function calculateScore() {
            var score = timeLeft;
            timeLeft = 1;
            finalScoreEl.textContent = score; // Update the final-score       
            return score;
        }

function scoreSave() {
    var initials = initialsInput.value.trim(); // Get the initials using the input field

    if (initials !== "") {
        var scoreData = {
            initials: initials,
            score: calculateScore()
        };

        // Retrieve existing scores from local storage or initialize an empty array
        var scores = JSON.parse(localStorage.getItem("scores")) || [];

        // Add new score data to the array
        scores.push(scoreData);

        // Save the updated scores array -  to the local storage
        localStorage.setItem("scores", JSON.stringify(scores));

        // redirect to a highscores page
        window.location.href = "highscores.html";
    } else {
        alert("Please enter your initials.");
    }
}

var submitButton = document.getElementById("submit");
submitButton.addEventListener("click", scoreSave);
        
        // Initial setup
        showQuestion();
