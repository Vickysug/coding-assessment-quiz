/* Some initial ideas

const startButton = document.getElementById('start-btn');
const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('question-container');
const answerButtonsContainer = document.getElementById('answer-buttons');
const endContainer = document.getElementById('end-container');
const scoreDisplay = document.getElementById('score');
const initialsInput = document.getElementById('initials');
const saveButton = document.getElementById('save-btn');

let currentQuestionIndex = 0;
let score = 0;
let timer;
const timeLimit = 60; // Set your time limit in seconds

const questions = [
  {
    question: 'What is the capital of France?',
    answers: ['Berlin', 'Madrid', 'Paris', 'Rome'],
    correctAnswer: 'Paris'
  },
  {
    question: 'Which planet is known as the Red Planet?',
    answers: ['Earth', 'Mars', 'Jupiter', 'Venus'],
    correctAnswer: 'Mars'
  },
  // Add more questions here...
];

startButton.addEventListener('click', startQuiz);
saveButton.addEventListener('click', saveScore);

function startQuiz() {
  startButton.classList.add('hidden');
  quizContainer.classList.remove('hidden');
  timer = setInterval(updateTimer, 1000);
  showQuestion();
}

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionContainer.innerText = currentQuestion.question;

  clearAnswerButtons();

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer;
    button.classList.add('btn');
    button.addEventListener('click', () => selectAnswer(answer, currentQuestion.correctAnswer));
    answerButtonsContainer.appendChild(button);
  });
}

function selectAnswer(selectedAnswer, correctAnswer) {
  if (selectedAnswer === correctAnswer) {
    score++;
  } else {
    // Subtract time for incorrect answers (adjust the value as needed)
    timer -= 10;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  clearInterval(timer);
  quizContainer.classList.add('hidden');
  endContainer.classList.remove('hidden');
  scoreDisplay.textContent = score;
}

function saveScore() {
  const initials = initialsInput.value.trim();

  if (initials !== '') {
    // Implement your logic to save the user's score (e.g., to local storage or a server)
    console.log(`Saved Score: ${initials} - ${score}`);
  }
}

function updateTimer() {
  if (timer > 0) {
    timer--;
  } else {
    endQuiz();
  }
}

function clearAnswerButtons() {
  while (answerButtonsContainer.firstChild) {
    answerButtonsContainer.removeChild(answerButtonsContainer.firstChild);
  }
}