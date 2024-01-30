function getComputerChoice(){
    let randomNum = Math.ceil(Math.random() * 3);
    let choice;
    
    if (randomNum == 1){
        choice = "Rock";
    }
    else if (randomNum == 2){
        choice = "Paper";
    }
    else 
        choice = "Scissor";

    return choice;
}

const computerChoice = getComputerChoice();