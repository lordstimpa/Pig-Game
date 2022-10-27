document.getElementById("btn-roll").addEventListener("click", playDice);
document.getElementById("btn-new").addEventListener("click", newGame);
document.getElementById("btn-hold").addEventListener("click", holdPoints);
const activePlayer0 = document.querySelector(".player-0-panel");
const activePlayer1 = document.querySelector(".player-1-panel");

let activePlayer, currentScore, totalScore0, totalScore1, playing;
newGame();

function newGame() {
  currentScore = 0;
  totalScore0 = 0;
  totalScore1 = 0;
  activePlayer = 0;
  playing = true;

  activePlayer0.classList.add("activePlayer");
  activePlayer1.classList.remove("activePlayer");
  document.getElementById(`current-0`).textContent = 0;
  document.getElementById(`current-1`).textContent = 0;
  document.getElementById(`score-0`).textContent = 0;
  document.getElementById(`score-1`).textContent = 0;
  document.getElementById(`name-0`).innerText = "Spelare 1";
  document.getElementById(`name-1`).innerText = "Spelare 2";

  console.clear();
}

function holdPoints() {
  if (playing) {
    if (activePlayer === 0) {
      activePlayer0.classList.toggle("activePlayer");
      activePlayer1.classList.toggle("activePlayer");
      totalScore0 += currentScore;
      document.getElementById(`current-${activePlayer}`).innerText =
        totalScore0;
      document.getElementById(`score-${activePlayer}`).textContent = 0;
      if (totalScore0 >= 100) {
        playing = false;
        document.getElementById("name-0").innerText = "Winner!";
      } else {
        swapPlayer();
      }
    } else if (activePlayer === 1) {
      activePlayer0.classList.toggle("activePlayer");
      activePlayer1.classList.toggle("activePlayer");
      totalScore1 += currentScore;
      document.getElementById(`current-${activePlayer}`).innerText =
        totalScore1;
      document.getElementById(`score-${activePlayer}`).textContent = 0;
      if (totalScore1 >= 100) {
        playing = false;
        document.getElementById("name-1").innerText = "Winner!";
      } else {
        swapPlayer();
      }
    }
  }
}

function swapPlayer() {
  if (activePlayer === 0) {
    currentScore = 0;
    activePlayer = 1;
  } else if (activePlayer === 1) {
    currentScore = 0;
    activePlayer = 0;
  }
}

function playDice() {
  if (playing) {
    let dice1 = Math.floor(Math.random() * 6) + 1;
    console.log("Dice 1 rolled: " + dice1);

    let dice2 = Math.floor(Math.random() * 6 + 1);
    console.log("Dice 2 rolled: " + dice2);

    let diceDisplay1 = document.getElementById("dice-1");
    let diceDisplay2 = document.getElementById("dice-2");

    diceDisplay1.src = `img/dice-${dice1}.png`;
    diceDisplay2.src = `img/dice-${dice2}.png`;

    if (dice1 !== 1) {
      currentScore += dice1;
      document.getElementById(`score-${activePlayer}`).textContent =
        currentScore;
    }
    if (dice2 !== 1) {
      currentScore += dice2;
      document.getElementById(`score-${activePlayer}`).textContent =
        currentScore;
    }
    if (dice1 === 1 || dice2 === 1) {
      activePlayer0.classList.toggle("activePlayer");
      activePlayer1.classList.toggle("activePlayer");
      document.getElementById(`score-${activePlayer}`).textContent = 0;
      swapPlayer();
    }
  }
}
