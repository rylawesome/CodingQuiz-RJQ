var timeLeft = 75;
var correct = 0;
var timeEl = document.querySelector(".time");

var questions = [
  {
    question: "Testing Testing 123",
    a: 'Answer A',
    b: 'Answer B',
    c: 'Answer C',
    answer: 'B'
  },
]

//getElementByID simplifier
function get(x) {
  return document.getElementById(x);
}

//Renders Question
function buildQuiz() {
  
}

//Timer
function myTimer() {
  var timerInterval = setInterval(function() {
    timeLeft--;
    timeEl.textContent = timeLeft + " seconds left.";

    if(timeLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  
    }, 1000);
  }

function showResults() {

}

startButton.addEventListener('click', myTimer);
submitButton.addEventListener('click', showResults);
viewHighscores.addEventListener('click', showResults);