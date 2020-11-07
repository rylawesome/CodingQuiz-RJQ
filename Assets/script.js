var timeEl = document.querySelector(".time");
var timeLeft = 75;
var correct = 0;
//Keeps track of which question the user is on
var currentQuestion = 0;
//List of Questions to display
var Questions = [
'Commonly used data types DO NOT include:',
'The condition in an if / else statement is enclosed within _____.',
'Arrays in Javascript can be used to store _____.',
'String values must be enclosed within _____ when being assigned to variables.',
'A very useful tool used during development and debugging for printing content to the debugger is:',
]
//List of all possible answers
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
//User input
var userAnswers = []
//Actual Answers
var adminAnswers = ['2', '2', '0', '2', '3']

//ElementById Simplifier
function getid(x) {
  return document.getElementById(x);
}

//Hide Questions
function questionHide() {
  getid('question').style.display = 'block';
  getid('buttons').style.display = 'block';
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
  else if (currentQuestion === 2) {
    getid('question').innerHTML = Questions[2];
    getid('btn0').innerHTML = Answers[8];
    getid('btn1').innerHTML = Answers[9];
    getid('btn2').innerHTML = Answers[10];
    getid('btn3').innerHTML = Answers[11];
    currentQuestion++;
  }
  else if (currentQuestion === 3) {
    getid('question').innerHTML = Questions[3];
    getid('btn0').innerHTML = Answers[12];
    getid('btn1').innerHTML = Answers[13];
    getid('btn2').innerHTML = Answers[14];
    getid('btn3').innerHTML = Answers[15];
    currentQuestion++;
  }
  else if (currentQuestion === 4) {
    getid('question').innerHTML = Questions[4];
    getid('btn0').innerHTML = Answers[16];
    getid('btn1').innerHTML = Answers[17];
    getid('btn2').innerHTML = Answers[18];
    getid('btn3').innerHTML = Answers[19];
    currentQuestion++;
  }
  else if (currentQuestion >= 5) {
    showResults();
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
  getid('question').style.display = 'none';
  getid('buttons').style.display = 'none';
  alert('Currently not implemented!')
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
viewHighscores.addEventListener('click', showResults);