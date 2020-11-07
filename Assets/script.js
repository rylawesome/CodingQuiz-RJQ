var timeEl = document.querySelector(".time");
var timeLeft = 75;
var correct = 0;
var currentQuestion = 0;
var Questions = [
'Commonly used data types DO NOT include:',
'The condition in an if / else statement is enclosed within _____.',
'Arrays in Javascript can be used to store _____.',
'String values must be enclosed within _____ when being assigned to variables.',
'A very useful tool used during development and debugging for printing content to the debugger is:',
]
var Answers = ['']

//ElementById Simplifier
function getid(x) {
  return document.getElementById(x);
}
//Hide Questions
function questionHide() {
  getid('question').style.display = 'block';
  getid('btn0').style.display = 'block';
  getid('btn1').style.display = 'block';
  getid('btn2').style.display = 'block';
  getid('btn3').style.display = 'block';
}
//Renders Question
function buildQuiz() {
  if (currentQuestion === 0) {
    getid('question').innerHTML = Questions[0];
  }
}

//Timer
function myTimer() {
  var timerInterval = setInterval(function() {
    timeLeft--;
    timeEl.textContent = timeLeft + " seconds left.";

    if(timeLeft === 0) {
      clearInterval(timerInterval);
      alert('Out of time!')
      showResults();
    }
  
    }, 1000);
  }

//Shows results of quiz
function showResults() {

}

startButton.addEventListener('click', buildQuiz);
startButton.addEventListener('click', myTimer);
startButton.addEventListener('click', questionHide);
submitButton.addEventListener('click', showResults);
viewHighscores.addEventListener('click', showResults);