let person = {
    name:  "Gizem",
    age: 30,
    country: "Turkey"
}

function logData(){
    console.log(`${person.name} is ${person.age} years old and lives in ${person.country}`)
}

logData()


// another way;
// function logData() {
//    console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
// }


let age = 15;

if(age < 6){
    console.log("free")
}
else if(age < 18){
    console.log("child discount")
}
else if(age < 27){
    console.log("student discount") 
}
else if(age < 67){
    console.log("full discount") 
}
else{
    console.log("senior citizen discount")
}

let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"];

for(let i = 0; i < largeCountries.length; i++){
    console.log("- " + largeCountries[i])
}

// Tuvalu yerine China, Monaco yerine Pakistanı yerleştirmek için:
largeCountries.pop()                //removes last element
largeCountries.push("Pakistan");    //adds element to end
console.log(largeCountries);

largeCountries.shift();             //removes first element
largeCountries.unshift("China")          //adds first element to beginning of array
console.log(largeCountries)


let dayOfMonth = 13
let weekday = "Friday"

if(dayOfMonth === 13 && weekday === "Friday"){
    console.log("😱")
}

// pick random item function:
let hands = ["rock", "paper", "scissor"];
function pickRandomItem(){
    randomItem = hands[Math.floor(Math.random() * hands.length)];
    return randomItem
}
console.log(pickRandomItem())


// emoji game:
let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    random1Emoji = fighters[Math.floor(Math.random() * fighters.length)]
    random2Emoji = fighters[Math.floor(Math.random() * fighters.length)]
    stageEl.textContent = random1Emoji + " vs " + random2Emoji
})


// put the apples onto apples-shelf and oranges onto orange-shelf:
let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

function separateTheFruits(){
    for(let i = 0; i < fruit.length; i++){
        if(fruit[i] === "🍎"){
            appleShelf.textContent += "🍎"
        }
        else{
            orangeShelf.textContent += "🍊"
        }
    }
}
separateTheFruits();








