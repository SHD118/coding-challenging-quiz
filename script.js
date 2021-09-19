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