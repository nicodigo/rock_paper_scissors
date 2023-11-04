
function getComputerChoice(){
    let randomInt = Math.floor(Math.random() * 3);
    switch (randomInt){
        case 0: 
            return "rock";
        case 1:
            return "paper";
        case 2: 
            return "scissors";
        default:
            return "";
    }
}


function getPlayerChoice(){
    let choice = "";
    do {
       choice = prompt("Enter your choice (rock, paper, scissors):");
       if (choice === null){
        choice = "";
       }
       choice = choice.toLowerCase();
    }while (!["rock", "paper", "scissors"].includes(choice));

    return choice;
}


function playRound(playerSelection, computerSelection){
    console.log("Player chose " + playerSelection + "\nComputer chose " + computerSelection);
    if (playerSelection === computerSelection){
        console.log("It's a Tie!");
        return 0;
    }
    else if ((playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")){
        console.log("You Win!");
        return 1;
    }
    else{
        console.log("Computer Wins!");
        return -1;
    }

}

function game(){
    const rounds = 5;
    let score = 0;
    for (let i = 0; i < rounds ; i++) {
        score += playRound(getPlayerChoice(), getComputerChoice());
    }

    if (score > 0){
        console.log("You Won The Game!!!");
    }
    else if (score < 0){
        console.log("Computer Won The Game");
    }
    else{
        console.log("The Game Ended In a Draw");
    }
}

game();
