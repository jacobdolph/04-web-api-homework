
var liEl = document.createElement("li");
var divEl = document.createElement("div");
var aEl = document.createElement("a");



var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var startGame = document.querySelector("#start-game");
var viewScores = document.querySelector("#view-highscore");
var question = document.querySelector("#quiz-question");
var options = document.querySelector("#choice-options");
var quizChoices;
var answers;
var score = 0;

var gameAreaEl = document.querySelector("#interaction-area");

var totalSeconds = 0;
var secondsElapsed = 0;
var interval;






function getFormattedMinutes() {
    var secondsLeft = totalSeconds - secondsElapsed;

    var minutesLeft = Math.floor(secondsLeft / 60);

    var formattedMinutes;

    if (minutesLeft < 10) {
        formattedMinutes = "0" + minutesLeft;
    } else {
        formattedMinutes = minutesLeft;
    }

    return formattedMinutes;
}
function getFormattedSeconds() {
    var secondsLeft = (totalSeconds - secondsElapsed) % 60;

    var formattedSeconds;

    if (secondsLeft < 10) {
        formattedSeconds = "0" + secondsLeft;
    } else {
        formattedSeconds = secondsLeft;
    }

    return formattedSeconds;
}
function setTime() {
    var minutes;
    minutes = 3;
    clearInterval(interval);
    totalSeconds = minutes * 60;
}
function renderTime() {
    minutesDisplay.textContent = getFormattedMinutes();
    secondsDisplay.textContent = getFormattedSeconds();

    if (secondsElapsed >= totalSeconds) {
        stopTimer();
    }
}
function startTimer() {
    setTime();

    interval = setInterval(function () {
        secondsElapsed++;
        renderTime();
    }, 1000);
}

function stopTimer() {
    secondsElapsed = 0;
    setTime();
    renderTime();
}



var quizBtn;


startGame.addEventListener("click", function () {
    for (var i = 0; i < questions.length; i++) {

        question.textContent = questions[i].title;

        function checkAnswerFunction() {

        }

        for (var n = 0; n < questions[i].choices.length; n++) {
            answers = questions[i].answer;
            quizChoices = questions[i].choices[n];
            var buttonEl = document.createElement("button");
            buttonEl.setAttribute("class", "btn btn-danger quiz-btn");
            buttonEl.setAttribute("onclick", "quizAnswer");
            buttonEl.textContent = quizChoices;
            options.append(buttonEl);

            console.log(questions[i].choices[n]);
            quizBtn = document.querySelector(".quiz-btn");
            quizBtn.addEventListener("click", function () {
                if (quizBtn.textContent === answers) {
                    console.log("trueest")
                }
            })

        }

        checkAnswerFunction();

    }

});










startGame.addEventListener("click", startTimer);