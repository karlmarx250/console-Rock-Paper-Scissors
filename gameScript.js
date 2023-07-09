

function getComputerChoice() {
    let choice = ["Rock", "Paper", "Scissors"];
    let randomRPS = choice[Math.floor(Math.random() * choice.length)];
    return randomRPS;
  }
  function playRound(playerSelection, computerSelection) {
    if (playerSelection == "Rock" && computerSelection == "Paper") {
      return "You lose! Paper beats Rock";
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
      return "You win! Paper beats Rock";
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
      return "You win! Rock beats Scissors";
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
      return "You lose! Rock beats Scissors";
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
      return "You lose! Scissors beats Paper";
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
      return "You win! Scissors beats Paper";
    } else if (playerSelection == computerSelection) {
      return "Draw";
    }
  }
  function game() {
    for (let i = 0; i < 5; i++) {
      let playerSelection = prompt(
        "Enter Rock, Paper or Scissors - CaseSensetive"
      );
      let computerSelection = getComputerChoice();
      console.log(playRound(playerSelection, computerSelection));
    }
  }
  game();