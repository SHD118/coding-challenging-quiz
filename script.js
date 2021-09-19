//Quiz questions
const myQuestions = [
    {
      question: "Inside which HTML element do we put the JavaScript?",
      choices: ["a. <js>", "b. <javascript>", "c. <scripting>", "d. <script>"],
      answer: "d. <script>"
    },
    {
      question: "String values must be enclosed within _____ when being assigned to variables.",
      choices: ["a. commas", "b. curly brackets", "c. quotes", "d. parenthesis"],
      answer: "c. quotes"
    },
    {
      question: "Arrays in JavaScript can be used to store _____.",
      choices: ["a. numbers and strings", "b. other arrays", "c. booleans", "d. all of the above"],
      answer: "b. other arrays"
    },
    {
      question: "Commonly used data types DO NOT include:",
      choices: ["a. strings", "b. booleans", "c. alerts", "d. numbers"],
      answer: "c. alerts"
    }
  
];
  
const startButton = document.getElementById("start_button");
let nextButton = document.getElementById("next_back");
let buttonDiv = document.getElementById("button_div");
var timerText = document.getElementById("timer-text");
var gameOver = document.getElementById("game_over");
var getScore = document.getElementById("score");
var timer = document.getElementById("timer");
var correctAnswer = document.getElementById("correct_answer_display")
var wrongAnswer = document.getElementById("wrong_answer_display")
var answerDisplay = document.getElementById("displayResults")
var answerResults = document.getElementById("answer_results");

const startDiv = document.getElementById("start_div");
const questionContainer = document.getElementById("question_container");
var questionText = document.getElementById("questions");

var temparr = [];
var score = 0;

var currentIndex = 0;
let = timerCount = 10000;



var currentIndex = 0;
let = timerCount = 10000;


var renderQuestion = function () {
  
  if (currentIndex !== myQuestions.length) {
    var currentQuestion = myQuestions[currentIndex];
    questionText.textContent = currentQuestion.question;
  }
  else {
    checkIfGameIsOver()
  }

  // TODO: render the content of currentQuestion
}

function initialButtonPress() {


  renderQuestion();
  // createButton()
}


// })
function checkIfGameIsOver() {
    if (timerCount <= 0 || myQuestions.length <= currentIndex + 1) {
      gameOver.classList.remove("hide")
      questionContainer.classList.add("hide")
      // nextButton.classList.add("hide")
      timer.classList.add("hide")
      getScore.textContent = timerText.textContent
      // clearInterval(IntervalTrigger);
      timerCount = -1;
      answerDisplay.classList.remove("hide")
      displayWrongs();
    }
  
}
  
//event Listeners
startButton.addEventListener("click", startQuiz)
function WrongAnswerDecrement() {
  if (timerCount !== 0) {
    timerCount -= 1000;
    
    console.log(score)


  }
  else if (timerCount <= 0) {


    checkIfGameIsOver()
  }
}

function IntervalTrigger() {
    setInterval(function () {
      if (timerCount === 0 ) {

        checkIfGameIsOver()
  
      }
      else {
        timerCount -= 1000;
        timerText.textContent = timerCount;
        
      }
    }, 1000)
  
  
  }



function startQuiz() {
    IntervalTrigger()
    startDiv.classList.add("hide");
    questionContainer.classList.remove("hide");
    initialButtonPress()

  }
  
function createButton() {
    buttonDiv.textContent = ''
    
      for (let i = 0; i < myQuestions[currentIndex].choices.length; i++) {
        let buttonTemp = document.createElement("button")
        buttonTemp.classList.add("btn-grad");
        buttonTemp.textContent = myQuestions[currentIndex].choices[i];
        console.log("buttonTemp : " + buttonTemp);
        buttonDiv.appendChild(buttonTemp)
        buttonTemp.addEventListener("click", validateButtonClick)
      
  
    }
  }
createButton()
  

function validateButtonClick(e) {
    hideAnswer()
    var answerButton = e.target
    
    var parseTemp = answerButton.textContent;

    if (parseTemp !== myQuestions[currentIndex].answer) {
      wrongAnswer.classList.remove("hide");
      temparr.push({
        wrong: parseTemp,
        right: myQuestions[currentIndex].answer
      })
      console.log(temparr)

        WrongAnswerDecrement();

      }
    else {
      correctAnswer.classList.remove("hide");

    }
   setTimeout(hideAnswer, 2000)
    
    if (myQuestions[currentIndex] !== undefined) {
      createButton();
      currentIndex = currentIndex + 1;
      renderQuestion();
    }
  
}
  
function hideAnswer() {
    correctAnswer.classList.add("hide")
    wrongAnswer.classList.add("hide")
  }
  
  