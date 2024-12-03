function getComputerChoice(){
    randomNumber = Math.floor(Math.random()*(3));
    const choice = ["Rock","Paper","Scissors"];
    return choice[randomNumber];
}

function getHumanChoice(){
    return prompt("pick a value from the 3: Rock, Paper, Scissors : ");
}
let humanScore = 0;
let computerScore = 0;

function playRound(){
    let computerChoice = getComputerChoice().toLowerCase();
    let humanChoice = getHumanChoice().toLowerCase();
    if(computerChoice===humanChoice)
        return;
    else if(computerChoice==="rock"){
        humanScore = (humanChoice==="paper")?10:0;
        computerScore = (humanChoice==="paper")?0:10;
    }
    else if(computerChoice==="paper"){
        humanScore = (humanChoice==="scissors")?10:0;
        computerScore = (humanChoice==="scissors")?0:10;
    }
    else {
        humanScore = (humanChoice==="rock")?10:0;
        computerScore = (humanChoice==="rock")?0:10;
    }
    console.log((humanScore>computerScore)?
    `human won - ${humanChoice} beats ${computerChoice}`:
    `computer won - ${computerChoice} beats ${humanChoice}`);
    console.log(`human: ${humanScore} computer: ${computerScore}`);
}
function playGame(){
    for(i=0;i<5;i++)
        playRound();
    console.log((humanScore>computerScore)?`human won`:`computer won`);
}
playGame();