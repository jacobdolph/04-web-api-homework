var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var startGame = document.querySelector("#start-game");
var viewScores = document.querySelector("#view-highscore");

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


startGame.addEventListener("click", startTimer);