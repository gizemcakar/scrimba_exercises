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
}