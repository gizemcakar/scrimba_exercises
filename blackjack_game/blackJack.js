// Blackjack game: sum of the two cards should be 21 or less than 21. 
// If the sum is higher than 21, you will be out of game.


let cards = []  // list of all cards
let sum = 0;

let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let player = {
    name: "Per",
    chips: 145
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13) + 1;
    if(randomNumber > 10){
        return 10;
    }
    else if(randomNumber === 1){
        return 11;
    }
    else{
        return randomNumber;
    }
}


function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    for(let i=0; i<cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum;
    if(sum <= 20){
        message = "Do you want to draw a new card?"
    } else if(sum === 21){
        message = "Woho! You've got Blackjack!"
        hasBlackJack = true;
    } else {
        message = "You're out of the game!"
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard(){
    if(isAlive === true && hasBlackJack === false){
        let card = getRandomCard();
        sum += card ;
        cards.push(card);
        renderGame();
    } 
}

let player1time = 102
let player2time = 107
function getFastestRaceTime(){
    if(player1time < player2time){
        return player1time
    }
    else if(player2time < player1time){
        return player2time
    }
    else{
        return player1time
    }
}

let fastestRace = getFastestRaceTime();

function getTotalRaceTime(){
    return player1time + player2time;
}

let totalTime = getTotalRaceTime();
console.log(totalTime)

//if(sum < 21){
//   message = "Do you want to draw a new card?"
//} else if(sum === 21){
//    message = "Woho! You've got Blackjack!"
//    hasBlackJack = true;
//} else if(sum > 21){
//    message = "You're out of the game!"
//    isAlive = false;
//}
//console.log(hasBlackJack)
//console.log(isAlive)
//console.log(message)

// else if(sum == "21") yazınca == çift tırnağı düşünmeden 21 olarak alıp uygulayabiliyor. Ancak, ===
// yazıldığında kodun çalışması için direk 21 yazılmış olması gerekiyor.

// example:
// let sentence = ["Hello", "my", "name", "is", "Per"] 
//let greetingEl = document.getElementById("greeting-el")

// Render the sentence in the greetingEl paragraph using a for loop and .textContent

//for (let i = 0; i < sentence.length; i++) {
//    greetingEl.textContent += sentence[i] + " "
//}

// let randomNumber = Math.floor( Math.random() * 6 ) + 1   
// for dice
// function rollDice() {
//    let randomNumber = Math.floor( Math.random() * 6 ) + 1
//    return randomNumber
// }
