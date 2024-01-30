// const play = playGame();

function playGame(){
    let countWins = 0;
    let draw = 0;

    alert("Hey!Let's play Rock Paper Scissor!!");

    for(i = 0; i < 5; i++){
        let playerChoice = prompt("Choose:");
        playerChoice = playerChoice.toLowerCase();

        const computerChoice = getComputerChoice();

        const result = playRound(playerChoice,computerChoice);

        if(result == "Won"){
            countWins++;
        }
        else if(result == "Draw"){
            draw++;
        }
        console.log("You " + result + "!");
    }
    console.log("The final score is: " + countWins + "-" + (5 - countWins - draw) + " with " + draw + " draws");
}

function getComputerChoice(){
    let randomNum = Math.ceil(Math.random() * 3);
    let choice;
    
    if (randomNum == 1){
        choice = "rock";
    }
    else if (randomNum == 2){
        choice = "paper";
    }
    else 
    choice = "scissor";

    return choice;
}

function playRound(playerSelection, computerSelection){
    const player = playerSelection;
    const computer = computerSelection;

    if (player == computer){
        return "Draw";
    }
    else if (player == "rock" && computer == "scissor" || player == "paper" && computer == "rock" || player == "scissor" && computer == "paper"){
        return "Won";
    }
    else
        return "Lost";
}