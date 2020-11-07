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
var Answers = [
'strings',  //0
'booleans', //1
'alerts',   //2 CORRECT
'numbers',  //3
'quotes',           //0
'curly brackets',   //1
'parentheses',      //2 CORRECT
'square brackets',  //3
'numbers & strings',  //0 CORRECT
'other arrays',       //1
'booleans',           //2
'all of the above',   //3
'commas',         //0
'curly brackets', //1
'quotes',         //2 CORRECT
'parentheses',    //3
'JavaScript',       //0
'terminal / bash',  //1
'for loops',        //2
'console.log',      //3 CORRECT
]
var userAnswers = []
var adminAnswers = ['2', '2', '0', '2', '3']

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
  getid('startButton').style.display = 'none';
}
//Renders Question
function buildQuiz() {
  if (currentQuestion === 0) {
    getid('question').innerHTML = Questions[0];
    getid('btn0').innerHTML = Answers[0];
    getid('btn1').innerHTML = Answers[1];
    getid('btn2').innerHTML = Answers[2];
    getid('btn3').innerHTML = Answers[3];
    currentQuestion++;
  }
  else if (currentQuestion === 1) {
    getid('question').innerHTML = Questions[1];
    getid('btn0').innerHTML = Answers[4];
    getid('btn1').innerHTML = Answers[5];
    getid('btn2').innerHTML = Answers[6];
    getid('btn3').innerHTML = Answers[7];
    currentQuestion++;
  }
}

//Record userInput
function userRecord0() {
  userAnswers.push('0');
  console.log(userAnswers);
}
function userRecord1() {
  userAnswers.push('1');
  console.log(userAnswers);
}
function userRecord2() {
  userAnswers.push('2');
  console.log(userAnswers);
}
function userRecord3() {
  userAnswers.push('3');
  console.log(userAnswers);
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
  if (userAnswers === adminAnswers) {
    
  }
}

startButton.addEventListener('click', buildQuiz);
startButton.addEventListener('click', myTimer);
startButton.addEventListener('click', questionHide);
btn0.addEventListener('click', buildQuiz)
btn1.addEventListener('click', buildQuiz)
btn2.addEventListener('click', buildQuiz)
btn3.addEventListener('click', buildQuiz)
btn0.addEventListener('click', userRecord0)
btn1.addEventListener('click', userRecord1)
btn2.addEventListener('click', userRecord2)
btn3.addEventListener('click', userRecord3)
submitButton.addEventListener('click', showResults);
viewHighscores.addEventListener('click', showResults);