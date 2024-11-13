let choices = document.getElementById("choices");
let HumanImage = document.getElementById("img")
let rock = document.getElementById("Rock")
let paper = document.getElementById("Paper")
let scissors = document.getElementById("Scissors")
let ComputerImage = document.getElementById("cimg")
console.log(rock)
let humanScore = 0;
let computerScore = 0;
function getComputersChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    console.log(Math.floor(Math.random() * 3))
    return choices[Math.floor(Math.random() * 3)]
}
choices.onclick = function(event) {
    var choice = event.target.id;
    PlayRound(choice, getComputersChoice());
    
    }
function Refresh(result) {
let result_human = document.getElementById("result_human");
let result_computer = document.getElementById("result_computer");
result_human.innerText = "Human: " + humanScore;
result_computer.innerText = "Computer: " + computerScore;
let final_result = document.getElementById("result");
final_result.innerText = result + "!";
}
function HumanAnimation(type) {
   HumanImage.style.animation = `${type} 2s ease-in-out`;

}
function ComputerAnimation(type) {
    ComputerImage.style.animation = `${type} 2s ease-in-out`;
 }
 HumanImage.addEventListener("animationstart", function(){
    rock.disabled = true
    paper.disabled = true
    scissors.disabled = true
    console.log("buttons")
})
HumanImage.addEventListener("animationend", function(){
    rock.disabled = false
    paper.disabled = false
    scissors.disabled = false
    ComputerImage.style.animation = `none`;
    HumanImage.style.animation = `none`;
})
function PlayRound(humanChoice, computerChoice) {
    if(computerChoice == humanChoice) {
        Refresh("tie")
        HumanAnimation(humanChoice.toLowerCase())
        ComputerAnimation(computerChoice.toLowerCase())

    }else if(humanChoice == "Paper" && computerChoice == "Scissors") {
        Refresh(`${humanChoice} vs ${computerChoice}: wins BOT-${computerChoice}`)
        HumanAnimation(humanChoice.toLowerCase())
        ComputerAnimation(computerChoice.toLowerCase())
        computerScore++;

    }else if (humanChoice == "Rock" && computerChoice == "Paper") {
        Refresh(`${humanChoice} vs ${computerChoice}: wins BOT-${computerChoice}`)
        HumanAnimation(humanChoice.toLowerCase())
        ComputerAnimation(computerChoice.toLowerCase())
        computerScore++;

    }else if (humanChoice == "Scissors" && computerChoice == "Rock"){
        Refresh(`${humanChoice} vs ${computerChoice}: wins BOT-${computerChoice}`)
        HumanAnimation(humanChoice.toLowerCase())
        ComputerAnimation(computerChoice.toLowerCase())
        computerScore++;

    }else {
        Refresh(`${humanChoice} vs ${computerChoice}: wins HUMAN-${humanChoice}`)
        console.log("WINNER WINNER CHICKEN DINNER!")
        HumanAnimation(humanChoice.toLowerCase())
        ComputerAnimation(computerChoice.toLowerCase())
        humanScore++;

    }
}