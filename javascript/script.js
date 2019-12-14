
var liEl = document.createElement("li");
var divEl = document.createElement("div");
var aEl = document.createElement("a");


var btn;
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

function clearChilds() {
    while (options.hasChildNodes()) {
        options.removeChild(options.firstChild);
    };
};




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

function quistion1() {
    question.textContent = questions[0].title;
    answers = questions[0].answer;

    for (var i = 0; i < questions[0].choices.length; i++) {
        quizChoices = questions[0].choices[i];
        buttonEl = document.createElement("button");
        buttonEl.setAttribute("class", "btn btn-danger quiz-btn");
        buttonEl.textContent = quizChoices;
        options.append(buttonEl);
        btn = document.querySelectorAll(".quiz-btn");
    }
}
function quistion2() {
    question.textContent = questions[1].title;
    answers = questions[1].answer;

    for (var i = 0; i < questions[1].choices.length; i++) {
        quizChoices = questions[1].choices[i];
        buttonEl = document.createElement("button");
        buttonEl.setAttribute("class", "btn btn-danger quiz-btn");
        buttonEl.textContent = quizChoices;
        options.append(buttonEl);
        btn = document.querySelectorAll(".quiz-btn");
        btn[i].addEventListener("click", function () {

            if (this.textContent === answers) {
                score++
                clearChilds();
                quistion3();
            } else {
                clearChilds()
                quistion3()
            }
        });
    }
}
function quistion3() {
    question.textContent = questions[2].title;
    answers = questions[2].answer;

    for (var i = 0; i < questions[2].choices.length; i++) {
        quizChoices = questions[2].choices[i];
        buttonEl = document.createElement("button");
        buttonEl.setAttribute("class", "btn btn-danger quiz-btn");
        buttonEl.textContent = quizChoices;
        options.append(buttonEl);
        btn = document.querySelectorAll(".quiz-btn");
        btn[i].addEventListener("click", function () {

            if (this.textContent === answers) {
                score++
                clearChilds();
                quistion4();
            } else {
                clearChilds()
                quistion4()
            }
        });
    }
}
function quistion4() {
    question.textContent = questions[3].title;
    answers = questions[3].answer;

    for (var i = 0; i < questions[3].choices.length; i++) {
        quizChoices = questions[3].choices[i];
        buttonEl = document.createElement("button");
        buttonEl.setAttribute("class", "btn btn-danger quiz-btn");
        buttonEl.textContent = quizChoices;
        options.append(buttonEl);
        btn = document.querySelectorAll(".quiz-btn");
        btn[i].addEventListener("click", function () {

            if (this.textContent === answers) {
                score++
                clearChilds();
                quistion5();
            } else {
                clearChilds()
                quistion5()
            }
        });
    }
}
function quistion5() {
    question.textContent = questions[4].title;
    answers = questions[4].answer;

    for (var i = 0; i < questions[4].choices.length; i++) {
        quizChoices = questions[4].choices[i];
        buttonEl = document.createElement("button");
        buttonEl.setAttribute("class", "btn btn-danger quiz-btn");
        buttonEl.textContent = quizChoices;
        options.append(buttonEl);
        btn = document.querySelectorAll(".quiz-btn");
        btn[i].addEventListener("click", function () {

            if (this.textContent === answers) {
                score++
                clearChilds();
                quistion6();
            } else {
                clearChilds()
                quistion6()
            }
        });
    }
}
function quistion6() {
    question.textContent = questions[5].title;
    answers = questions[5].answer;

    for (var i = 0; i < questions[5].choices.length; i++) {
        quizChoices = questions[5].choices[i];
        buttonEl = document.createElement("button");
        buttonEl.setAttribute("class", "btn btn-danger quiz-btn");
        buttonEl.textContent = quizChoices;
        options.append(buttonEl);
        btn = document.querySelectorAll(".quiz-btn");
        btn[i].addEventListener("click", function () {

            if (this.textContent === answers) {
                score++
                clearChilds();
                quistion7();
            } else {
                clearChilds()
                quistion7()
            }
        });
    }
}
function quistion7() {
    question.textContent = questions[6].title;
    answers = questions[6].answer;

    for (var i = 0; i < questions[6].choices.length; i++) {
        quizChoices = questions[6].choices[i];
        buttonEl = document.createElement("button");
        buttonEl.setAttribute("class", "btn btn-danger quiz-btn");
        buttonEl.textContent = quizChoices;
        options.append(buttonEl);
        btn = document.querySelectorAll(".quiz-btn");
        btn[i].addEventListener("click", function () {

            if (this.textContent === answers) {
                score++
                clearChilds();
                quistion8();
            } else {
                clearChilds()
                quistion8()
            }
        });
    }
}
function quistion8() {
    question.textContent = questions[7].title;
    answers = questions[7].answer;

    for (var i = 0; i < questions[7].choices.length; i++) {
        quizChoices = questions[7].choices[i];
        buttonEl = document.createElement("button");
        buttonEl.setAttribute("class", "btn btn-danger quiz-btn");
        buttonEl.textContent = quizChoices;
        options.append(buttonEl);
        btn = document.querySelectorAll(".quiz-btn");
        btn[i].addEventListener("click", function () {

            if (this.textContent === answers) {
                score++
                clearChilds();
                quistion9();
            } else {
                clearChilds()
                quistion9()
            }
        });
    }
}
function quistion9() {
    question.textContent = questions[8].title;
    answers = questions[8].answer;

    for (var i = 0; i < questions[8].choices.length; i++) {
        quizChoices = questions[8].choices[i];
        buttonEl = document.createElement("button");
        buttonEl.setAttribute("class", "btn btn-danger quiz-btn");
        buttonEl.textContent = quizChoices;
        options.append(buttonEl);
        btn = document.querySelectorAll(".quiz-btn");
        btn[i].addEventListener("click", function () {

            if (this.textContent === answers) {
                score++
                clearChilds();
                quistion10();
            } else {
                clearChilds()
                quistion10()
            }
        });
    }
}
function quistion10() {
    question.textContent = questions[9].title;
    answers = questions[9].answer;

    for (var i = 0; i < questions[9].choices.length; i++) {
        quizChoices = questions[9].choices[i];
        buttonEl = document.createElement("button");
        buttonEl.setAttribute("class", "btn btn-danger quiz-btn");
        buttonEl.textContent = quizChoices;
        options.append(buttonEl);
        btn = document.querySelectorAll(".quiz-btn");
        btn[i].addEventListener("click", function () {

            if (this.textContent === answers) {
                score++
                clearChilds();
                stopTimer();
            } else {
                clearChilds()
                stopTimer()

            }
        });
    }
}



startGame.addEventListener("click", function () {
    question.textContent = questions[0].title;
    answers = questions[0].answer;

    for (var i = 0; i < questions[0].choices.length; i++) {
        quizChoices = questions[0].choices[i];
        buttonEl = document.createElement("button");
        buttonEl.setAttribute("class", "btn btn-danger quiz-btn");
        buttonEl.textContent = quizChoices;
        options.append(buttonEl);
        btn = document.querySelectorAll(".quiz-btn");


        btn[i].addEventListener("click", function () {
            console.log("hi");
            if (this.textContent === answers) {
                score++;
                while (options.hasChildNodes()) {
                    options.removeChild(options.firstChild);
                };
                quistion2()
                // btn[i].addEventListener("click", function () {
                //     console.log("hi")
                //     if (this.textContent === answers) {
                //         console.log("lo")
                //     }
                // })



            } else {
                while (options.hasChildNodes()) {
                    options.removeChild(options.firstChild);
                }
                quistion2();

            };

        }
        )
    }
}





);







startGame.addEventListener("click", startTimer);