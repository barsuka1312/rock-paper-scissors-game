function getComputerChoice() {
    let choice = Math.random() * 3;
        if (choice <= 1) {
            return "rock";
        } else if (choice <= 2) {
            return "paper";
        } else {
            return "scissors";
        }
}

const computerSelection = getComputerChoice();
console.log('Computer:' + computerSelection);

function getHumanChoice() {
    let choice = prompt('Rock, paper, scissors?').toLowerCase();
    return choice;
}

const humanSelection = getHumanChoice();
console.log('Human:' + humanSelection);


let humanScore = 0;
let computerScore = 0;


function playRound(humanSelection, computerSelection) {
    
    if (humanSelection == computerSelection) {
        return 'It is a draw!'; 
    }

    if (humanSelection == 'rock' && computerSelection == 'scissors') {
        humanScore += 1;
        return 'You won! Rock beats Scissors!';
    } else if (humanSelection == 'scissors' && computerSelection == 'paper') {
        humanScore += 1;
        return 'You won! Scissors beat Paper!';
    } else if (humanSelection == 'paper' && computerSelection == 'rock') {
        humanScore += 1;
        return 'You won! Paper beats Rock!';
    } else {
        return computerScore += 1, 'You lose! ' + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + ' beats ' + humanSelection + '!';
    }
}

console.log(playRound(humanSelection, computerSelection));

console.log('Computer:' + computerScore + ' vs ' + 'Human:' + humanScore);