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
        choice = "scissors";

    return choice;
}

function playRound(playerSelection, computerSelection){
    const player = playerSelection;
    const computer = computerSelection;
    let result = document.getElementById("resultText");
    let playerChose = document.getElementById("player");
    let compChose = document.getElementById("comp");


    if (player == computer){
        playerChose.innerHTML = player;
        compChose.innerHTML = computer;
        result.innerHTML = "It's a draw";
    }
    else if (player == "rock" && computer == "scissors" || player == "paper" && computer == "rock" || player == "scissors" && computer == "paper"){
        playerChose.innerHTML = player;
        compChose.innerHTML = computer;
        result.innerHTML = "You won";
    }
    else{
    playerChose.innerHTML = player;
    compChose.innerHTML = computer;
    result.innerHTML = "You Lost";
    }
}
    
    // const play = playGame();
    
    // function playGame(){
    //     let countWins = 0;
    //     let draw = 0;
    
    //     alert("Hey!Let's play Rock Paper Scissor!!");
    
    //     // for(i = 0; i < 5; i++){
    //     //     let playerChoice = prompt("Choose:");
    //     //     playerChoice = playerChoice.toLowerCase();
    
    //     //     const computerChoice = getComputerChoice();
    //     //     console.log("The computer choose "+ computerChoice);
    
    //     //     const result = playRound(playerChoice,computerChoice);
    
    //     //     if(result == "Won"){
    //     //         countWins++;
    //     //     }
    //     //     else if(result == "Draw"){
    //     //         draw++;
    //     //     }
    //     //     console.log("You " + result + "!");
    //     // }
    //     // console.log("The final score is: " + countWins + "-" + (5 - countWins - draw) + " with " + draw + " draws");
    // }