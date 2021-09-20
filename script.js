//Quiz questions
//Created an array of arrays for question,choices and answer
//Reasoning was it organized my data and it made it easy to access elements
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


// Added all the getElementBy for all the html elements needed for this process
const startButton = document.getElementById("start_button");
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
var localScore = document.getElementById("local_score");
var displayScores = document.getElementById("display_scores");
var scoreHeader = document.getElementById("score_header");
var clearItems = document.getElementById("clear_items");

//Assignmeents
var finalAnswerArray = [];
var score = 0;
var currentIndex = 0;
let = timerCount = 30000;

//Render questions when button is press and checks if there are no more questions ->checksIfGameIsOver
var renderQuestion = function () {

    if (currentIndex !== myQuestions.length) {
        var currentQuestion = myQuestions[currentIndex];
        questionText.textContent = currentQuestion.question;
    }
    else {
        checkIfGameIsOver()
    }

}

function initialButtonPress() {


    renderQuestion();

}

//Does a check if time current value is <=0 and there is no question left in banks
//Than i remove the hide for game over html element and add hide to the question continaer and display the score
//To make the timer stop I set the value to -1
//Finally I display the wrong answers the user inputed 
function checkIfGameIsOver() {
    if (timerCount <= 0 || myQuestions.length <= currentIndex + 1) {
        gameOver.classList.remove("hide")
        questionContainer.classList.add("hide")

        timer.classList.add("hide")
        
       
       

        timerCount = -1;
        answerDisplay.classList.remove("hide")
        
        displayWrongs();
        setScores()
        getScores()
    }

}

// Local storage functionality to display all scores per Quiz
function setScores() {
    localScore.classList.remove("hide")
    scoreHeader.classList.remove("hide")
    clearItems.classList.remove("hide")
    var valueofName = prompt("Please enter your initials")
    if (valueofName === "" || valueofName === null) {
        alert("please enter your initials");
        setScores()


    }
    else {
  
        getScore.textContent = valueofName + " : " + timerText.textContent
        console.log(valueofName)
        localStorage.setItem(valueofName, getScore.textContent)
        console.log(valueofName, getScore.textContent)
    }
}

function getScores() {
    for (let i = 0; i < localStorage.length; i++){
        var key = localStorage.key(i)
        var value = localStorage.getItem(key)
       let scorelist = document.createElement("p")
       scorelist.textContent = ` Quiz attempt [${i}] : ${key} : ${value}`
        console.log(scorelist)
        displayScores.appendChild(scorelist)
    }
}
//End of local storage functionality


//event Listeners for startbutton will call startQuiz function
startButton.addEventListener("click", startQuiz)
clearItems.addEventListener("click", function () {
    window.localStorage.clear();
    location.reload();
    clearItems.classList.add("hide")
})

//This function will decrement the current time by 1000ms if user inputs wrong answer and also check if timer is <=0 than call checkIfGameIsOver()
function WrongAnswerDecrement() {
    if (timerCount !== 0) {
        timerCount -= 1000;

        console.log(score)


    }
    else if (timerCount <= 0) {


        checkIfGameIsOver()
    }
}
//Set interval handles the timer 
function IntervalTrigger() {
    setInterval(function () {
        if (timerCount === 0) {

            checkIfGameIsOver()

        }
        else {
            timerCount -= 1000;
            timerText.textContent = timerCount;

        }
    }, 1000)


}

//button start button press this function will start the quiz
function startQuiz() {
    IntervalTrigger()
    startDiv.classList.add("hide");
    questionContainer.classList.remove("hide");
    timer.classList.remove("hide");
    clearItems.classList.add("hide")
    initialButtonPress()

}

//CreateButton loops the myQuestions and creates a button of the current answers of the currentIndex 
function createButton() {
    buttonDiv.textContent = ''

if(currentIndex < myQuestions.length){
    for (let i = 0; i < myQuestions[currentIndex].choices.length; i++) {
        let buttonTemp = document.createElement("button")
        buttonTemp.classList.add("btn-grad");
        buttonTemp.textContent = myQuestions[currentIndex].choices[i];
        console.log("buttonTemp : " + buttonTemp);
        buttonDiv.appendChild(buttonTemp)
        buttonTemp.addEventListener("click", validateButtonClick)
    }
    

    }
    else {
        console.log("Games over pal")
    }
}
createButton()

//This function will validate all the wrong answers the user inputs and append it to another array which will be used at the end of game
//It also calls functions such as wrongAnswerDecrement per wrong answer
//calls wrong/correct answer function to display if the answer user clicked is correct or wrong
function validateButtonClick(e) {
    hideAnswer()
    var answerButton = e.target

    var parseTemp = answerButton.textContent;
    var questionTemp = myQuestions[currentIndex].question

    if (parseTemp !== myQuestions[currentIndex].answer) {
        wrongAnswer.classList.remove("hide");
        finalAnswerArray.push({
            question : questionTemp,
            wrong: parseTemp,
            right: myQuestions[currentIndex].answer
        })



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
    createButton();

}

//Hides wrong/correct displays for next question
function hideAnswer() {
    correctAnswer.classList.add("hide")
    wrongAnswer.classList.add("hide")
}




//Displays all the wrong answers at the end of game with what the correct answer was for that questions
function displayWrongs() {
    console.log("happens")
    for (let i = 0; i < finalAnswerArray.length; i++) {
        let listItem = document.createElement("li");
        
        listItem.textContent = `question ${i} : ${finalAnswerArray[i].question}  : your answer:  ${finalAnswerArray[i].wrong} correct answer:  ${finalAnswerArray[i].right}`
        console.log(listItem)
        answerResults.appendChild(listItem);
    }

}

