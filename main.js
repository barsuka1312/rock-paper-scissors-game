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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;


function playRound(humanSelection, computerSelection) {
    
    if (humanSelection === computerSelection) {
        return 'It is a draw!'; 
    }

    if (humanSelection === 'rock' && computerSelection === 'scissors') {
        humanScore += 1;
        return 'You won! Rock beats Scissors!';
    } else if (humanSelection === 'scissors' && computerSelection === 'paper') {
        humanScore += 1;
        return 'You won! Scissors beat Paper!';
    } else if (humanSelection === 'paper' && computerSelection === 'rock') {
        humanScore += 1;
        return 'You won! Paper beats Rock!';
    } else {
        return computerScore += 1, 'You lose! ' + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + ' beats ' + humanSelection + '!';
    }
}

console.log(playRound(humanSelection, computerSelection));

console.log('Computer: ' + computerScore + ' vs ' + 'Human: ' + humanScore);

    let round1 = playRound(getHumanChoice(), getComputerChoice());
    console.log(round1);
    if (round1.includes('won')) {
        humanScore += 1;
    } else if (round1.includes('lose')) {
        computerScore += 1;
    }

    console.log('Computer:' + computerSelection);
    console.log('Human:' + humanSelection);
    console.log('Computer: ' + computerScore + ' vs ' + 'Human: ' + humanScore);

    let round2 = playRound(getHumanChoice(), getComputerChoice());
    console.log(round2);
    if (round2.includes('won')) {
        humanScore += 1;
    } else if (round2.includes('lose')) {
        computerScore += 1;
    }

    console.log('Computer:' + computerSelection);
    console.log('Human:' + humanSelection);
    console.log('Computer: ' + computerScore + ' vs ' + 'Human: ' + humanScore);

    let round3 = playRound(getHumanChoice(), getComputerChoice());
    console.log(round3);
    if (round3.includes('won')) {
        humanScore += 1;
    } else if (round3.includes('lose')) {
        computerScore += 1;
    }

    console.log('Computer:' + computerSelection);
    console.log('Human:' + humanSelection);
    console.log('Computer: ' + computerScore + ' vs ' + 'Human: ' + humanScore);

    let round4 = playRound(getHumanChoice(), getComputerChoice());
    console.log(round4);
    if (round4.includes('won')) {
        humanScore += 1;
    } else if (round4.includes('lose')) {
        computerScore += 1;
    }

    console.log('Computer:' + computerSelection);
    console.log('Human:' + humanSelection);
    console.log('Computer: ' + computerScore + ' vs ' + 'Human: ' + humanScore);

    let round5 = playRound(getHumanChoice(), getComputerChoice());
    console.log(round5);
    if (round5.includes('won')) {
        humanScore += 1;
    } else if (round5.includes('lose')) {
        computerScore += 1;
    }

    console.log('Computer:' + computerSelection);
    console.log('Human:' + humanSelection);
    console.log('Computer: ' + computerScore + ' vs ' + 'Human: ' + humanScore);

    if (humanScore > computerScore) {
        console.log('You are the winner!');
    } else if (humanScore < computerScore) {
        console.log('Computer is the winner!');
    } else {
        console.log('That is a total draw!');
    }
}


playGame();
