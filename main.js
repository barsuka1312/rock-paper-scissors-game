function playGame() {

    //declare variables to track players score
    let humanScore = 0;
    let computerScore = 0;

    //returns string values: rock, paper or scissors
    function getComputerChoice() {
        const randomWords = ['rock', 'paper', 'scissors'];
        return randomWords[Math.floor(Math.random() * randomWords.length)];
    }

    //takes user choice and returns it
    function getHumanChoice() {

        const buttonsContainer = document.querySelector('body');
        buttonsContainer.style.textAlign = 'center';

        //create three buttons, one for each selection
        const rockButton = document.createElement('button');
        rockButton.textContent = 'Rock';
        buttonsContainer.appendChild(rockButton);

        const paperButton = document.createElement('button');
        paperButton.textContent = 'Paper';
        buttonsContainer.appendChild(paperButton);

        const scissorsButton = document.createElement('button');
        scissorsButton.textContent = 'Scissors';
        buttonsContainer.appendChild(scissorsButton);

        //add event listeners to buttons
        rockButton.addEventListener('click', () => handlePlay('rock'));
        paperButton.addEventListener('click', () => handlePlay('paper'));
        scissorsButton.addEventListener('click', () => handlePlay('scissors'));

        function handlePlay(humanSelection) {

            //delete buttons after made selection
            rockButton.remove();
            paperButton.remove();
            scissorsButton.remove();

            //starts round
            const computerSelection = getComputerChoice();
            const result = playRound(humanSelection, computerSelection);

            const resultContainer = document.createElement('div');
            resultContainer.style.textAlign = 'center';
            document.body.appendChild(resultContainer);

            const computerSelectionPara = document.createElement('p');
            computerSelectionPara.textContent = 'Computer: ' + computerSelection;
            resultContainer.appendChild(computerSelectionPara);

            const humanSelectionPara = document.createElement('p');
            humanSelectionPara.textContent = 'Human: ' + humanSelection;
            resultContainer.appendChild(humanSelectionPara);

            console.log(result);

            const playersScores = document.createElement('p');
            playersScores.textContent = 'Computer: ' + computerScore + ' vs ' + 'Human: ' + humanScore;
            playersScores.style.border = '2px solid hotpink';
            resultContainer.appendChild(playersScores);

            //declare winner
            if (computerScore >= 3) {
                const computerIsWinner = document.createElement('p');
                computerIsWinner.textContent = 'Computer is the winner!';
                document.body.appendChild(computerIsWinner);
            } else if (humanScore >= 3) {
                const humanIsWinner = document.createElement('p');
                humanIsWinner.textContent = 'You are the winner!';
                document.body.appendChild(humanIsWinner);
            } else {
                getHumanChoice();
            }
        }
    }

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
    getHumanChoice();
}

playGame();

