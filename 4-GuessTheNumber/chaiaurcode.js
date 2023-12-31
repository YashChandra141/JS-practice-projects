const random = parseInt(Math.random() * 100 + 1);
const submit = document.getElementById("subt");
const ui = document.getElementById("guessField");
const gs = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const input = document.createElement("input");
let preGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(ui.value);
    console.log(guess);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert("enter valid number");
  } else {
    preGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game over. Random num was ${random}`);
      endgame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess === random) {
    displayMessage("you  guessed it right ");
    endGame();
  } else if (guess < random) {
    displayMessage("too low");
  } else {
    displayMessage("too high");
  }
}
function displayGuess(guess) {
  ui.value = "";
  gs.innerHTML += `${guess},`;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
  ui.value = "";
  ui.setAttribute("disabled", "");
  input.classList.add("button");
  input.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(input);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameB = document.getElementById("newGame");
  newGameB.addEventListener("click", (e) => {
    // e.preventDefault();
    random = parseInt(Math.random() * 100 + 1);
    preGuess = [];
    numGuess = 1;
    gs.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess}`;
    ui.removeAttribute("disabled");
    startOver.removeChild(input);
    playGame = true;
  });
}
