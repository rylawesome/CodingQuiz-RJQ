var timeEl = document.querySelector(".time");
var score = 0;
var timeLeft = 75;
//Keeps track of which question the user is on
var currentQuestion = 0;
//List of Questions to display
var Questions = [
'Commonly used data types DO NOT include:',
'The condition in an if / else statement is enclosed within _____.',
'Arrays in Javascript can be used to store _____.',
'String values must be enclosed within _____ when being assigned to variables.',
'A very useful tool used during development and debugging for printing content to the debugger is:',
];
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
'numbers & strings',  //0
'other arrays',       //1
'booleans',           //2
'all of the above',   //3 CORRECT
'commas',         //0
'curly brackets', //1
'quotes',         //2 CORRECT
'parentheses',    //3
'JavaScript',       //0
'terminal / bash',  //1
'for loops',        //2
'console.log',      //3 CORRECT
];
//User input
var userAnswers = [];
//Actual Answers
var adminAnswers = ['2', '2', '3', '2', '3'];
//High Score Variables
var scoreInput = document.querySelector("#score-text");
var scoreForm = document.querySelector("#score-form");
var scoreList = document.querySelector("#score-list");

var todos = [];

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

//compares userAnswers and adminAnswers array for score
function filter() {
  for (i = 0; i < userAnswers.length; i++) {
    console.log(i)
    if (userAnswers[i] === adminAnswers[i]) {
      score = score + 10
      console.log(score)
    }
    else {
      console.log(null)
    }
  }
}

//Shows results of quiz
function showResults() {
  filter();
  getid('score-form').style.display = 'block';
  callHscore();
  score = score + timeLeft
  getid('question').style.display = 'none';
  getid('buttons').style.display = 'none';
  getid('score').style.display = 'block';
  getid('score').innerHTML = score;
}

function callHscore() {
  // Get stored highscores from localStorage
  var storedHscore = JSON.parse(localStorage.getItem("hscore"));

  // If todos were retrieved from localStorage, update the todos array to it
  if (storedHscore !== null) {
    hscore = storedHscore;
  }

  // Render todos to the DOM
  renderHscore();
}

function renderHscore() {
  scoreList.innerHTML = "";

// New li for highscores
for (var j = 0; i < hscore.length; j++) {
  var hscore = hscore[i];

  var li = document.createElement("li");
  li.textContent = hscore + score;
  li.setAttribute("data-index", j);

  var button = document.createElement("button");
  button.textContent = "Complete";

  li.appendChild(button);
  todoList.appendChild(li);
}
}

function storeHscore() {
  // String "hscore" in localStorage to array
  localStorage.setItem("hscore", JSON.stringify(hscore));
}

// On form submit
scoreForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var scoreText = scoreInput.value.trim();

  // Do not submit blank text
  if (scoreText === "") {
    return;
  }

  // Add new todoText to todos array, clear the input
  hscore.push(scoreText);
  scoreInput.value = "";

  // Store updated todos in localStorage, re-render the list
  storeHscore();
  renderHscore();
});

btn0.addEventListener('click', userRecord0)
btn1.addEventListener('click', userRecord1)
btn2.addEventListener('click', userRecord2)
btn3.addEventListener('click', userRecord3)
btn0.addEventListener('click', buildQuiz)
btn1.addEventListener('click', buildQuiz)
btn2.addEventListener('click', buildQuiz)
btn3.addEventListener('click', buildQuiz)
startButton.addEventListener('click', buildQuiz);
startButton.addEventListener('click', myTimer);
startButton.addEventListener('click', questionHide);
viewHighscores.addEventListener('click', showResults);