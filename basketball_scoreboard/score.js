let homeScore = document.getElementById("home-score")
let guessScore = document.getElementById("guess-score")

homeScore.innerHTML = 0;
guessScore.innerHTML = 0;

function addScore(team, value){
    if(team === 1){
        homeScore.innerHTML = parseInt(homeScore.innerHTML) + parseInt(value)
    }
    else {
        guessScore.innerHTML = parseInt(guessScore.innerHTML) + parseInt(value)
    }
    highlightLeader();
 }

function highlightLeader(){
    const tmpHomeScore = parseInt(homeScore.innerHTML);
    const tmpGuessScore = parseInt(guessScore.innerHTML)
    if( tmpHomeScore > tmpGuessScore){
        homeScore.style.fontWeight = 'bold';
        guessScore.style.fontWeight = '';
    }
    else if(tmpHomeScore < tmpGuessScore){
        guessScore.style.fontWeight = 'bold'
        homeScore.style.fontWeight = '';
    }
    else if(tmpHomeScore == tmpGuessScore){
        homeScore.style.fontWeight = '';
        guessScore.style.fontWeight = '';
    }
}

function newGame(){
    homeScore.innerHTML =0
    guessScore.innerHTML =0
    time = 0;
    period = 0;
    document.getElementById("period").innerHTML = null;
    document.getElementById("timer").innerHTML = null;
    stopTimer();
}

var timerInterval;
var time = 0;
var period = 0;
function myTimer() {
    time--; 
    document.getElementById("timer").innerHTML = time;
    if(time === 0){
        period++;
        document.getElementById("period").innerHTML = period;
        stopTimer();
    }
}

function startTimer(){
    if(time === 0){
        time = 12;
        document.getElementById("timer").innerHTML = time;
        timerInterval = setInterval(myTimer, 1000);
        document.getElementById("period").innerHTML = period + 1;
    }
}

function stopTimer() { 
   clearInterval(timerInterval);
   timerInterval = null;
}