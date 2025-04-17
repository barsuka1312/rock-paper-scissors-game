// returns string values: rock, paper or scissors
function getComputerChoice() {
    const randomWords = ['rock', 'paper', 'scissors'];
    const randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
    return randomWord;
}



//takes user choice and returns it
function getHumanChoice() {
    const userInput = prompt('Rock, paper, scissors?').toLowerCase();
    return userInput;
}


//calls playRound to play 5 rounds, tracks scores and declares a winner
function playGame() {

    //declare variables to track players score
    let humanScore = 0;
    let computerScore = 0;

    //single round
    function playRound(humanSelection, computerSelection) {
        if (humanSelection === computerSelection) {
            return 'It is a tie!';
        } else if (humanSelection === 'rock' && computerSelection === 'scissors') {
            humanScore += 1;
            return 'You won! Rock beats Scissors!';
        }
        else if (humanSelection === 'scissors' && computerSelection === 'paper') {
            humanScore += 1;
            return 'You won! Scissors beats Paper!';
        } else if (humanSelection === 'paper' && computerSelection === 'rock') {
            humanScore += 1;
            return 'You won! Paper beats Rock!';
        } else {
            computerScore += 1;
            return 'You lose! ' + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + ' beats ' + humanSelection + '!';
        }
    }

    //five rounds
    for (let i = 0; i < 3; i++) {
        const computerSelection = getComputerChoice();
        console.log('Computer: ' + computerSelection);

        const humanSelection = getHumanChoice();
        console.log('Human: ' + humanSelection);

        console.log(playRound(humanSelection, computerSelection));
        console.log('Computer: ' + computerScore + ' vs ' + 'Human: ' + humanScore);
    }

    //declare winner
    if (computerScore > humanScore) {
        console.log('Computer is the winner!');
    } else if (humanScore > computerScore) {
        console.log('You are the winner!');

    } else {
        console.log('It\'s a total tie!');
    }
}

playGame();
