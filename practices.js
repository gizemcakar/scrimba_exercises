// Concatanate the string values:
let firstName = "Gizem";
let lastName = "Cakar";
let fullName = firstName + " " + lastName ;
console.log(fullName)


let nameID = "Linda";
let greeting = "Hi there";
function greet(){
    console.log(greeting + ", " + nameID + "!")
    console.log(`${greeting}, ${nameID}!`)
}
greet()

// add 3 point and remove 1 point in separate functions:
let myPoints = 3;

function add3Points(){
    myPoints += 3;
}

function removalPoint(){
    myPoints -= 1;
}
// Call the functions to myPoints log out 10
add3Points()
add3Points()
add3Points()
removalPoint()
removalPoint()

console.log(myPoints)

// how the lines log out:
console.log("2"+ 2) // 22
console.log(11 + 7) // 18
console.log("6" + 5) // 65
console.log("My points: " + 5 + 9) // My points: 59
console.log(2 + 2) // 4
console.log("11" + "14") // 1114

// Create buttons and their functions:
let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sumEl = document.getElementById("sum-el")

function add(){
    let result = num1 + num2
    sumEl.textContent = "Sum: " + result
}

function subtract(){
    let result = num1 - num2
    sumEl.textContent = "Sum: " + result
}

function divide(){
    let result = num1 / num2
    sumEl.textContent = "Sum: " + result
}

function multiply(){
    let result = num1 * num2
    sumEl.textContent = "Sum: " + result
}


