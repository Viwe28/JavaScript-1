const computerChoice = document.getElementById("Computer-choice");
const userChoice = document.getElementById("User-choice");
let resultD = document.getElementById("Result");
let userTurn;
let computerTurn;
let result;

let btns = document.querySelectorAll("button");
console.log(btns);

btns.forEach((btn)=>{
   btn.addEventListener("click", userSelection)  
})

function userSelection(x){
   userTurn = x.target.id;
   userChoice.textContent = userTurn;

computerSelection();
displayResult();
}

function computerSelection(){
const randomNumber = Math.floor(Math.random() * 3) + 1
console.log(randomNumber)
if(randomNumber === 1) {
    computerTurn = "Rock"
    computerChoice.innerText = computerTurn;
}
if(randomNumber === 2) {
    
    computerTurn = "Scissor"
    computerChoice.innerText = computerTurn;
}
if(randomNumber === 3) {
    computerTurn = "Paper"
    computerChoice.innerText = computerTurn;
}
}

function displayResult() {

if(userTurn === computerTurn){
    result = "Draw"
}
if(computerTurn ==="Rock" && userTurn === "Paper") {
    result = "You win"
}
if(computerTurn === "Rock" && userTurn ==="Scissor") {
    result = "You lost !!!"
}
if(computerTurn ==="Paper" && userTurn === "Scissor"){
    result = "You win"
}
if(computerTurn === "Paper" && userTurn === "Rock") {
    result = "You lost"
}
if(computerTurn==="Scissor" && userTurn === "Rock") {
    result = "You win"
}
if(computerTurn === "Scissor" && userTurn === "Paper"){
    result = "You lost"
}

resultD.innerText = result;
}