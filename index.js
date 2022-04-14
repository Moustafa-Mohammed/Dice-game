const imageOne = document.querySelector(".img1");
const imageTwo = document.querySelector(".img2");
const playBtn = document.querySelector(".btn");

const playerOneDice = Math.floor(Math.random() * 6) + 1;

const playerTwoDice = Math.floor(Math.random() * 6) + 1;

imageOne.setAttribute("src", "./images/dice" + playerOneDice + ".png");
imageTwo.setAttribute("src", "./images/dice" + playerTwoDice + ".png");

const refresh = () => {
  location.reload();
};

playBtn.addEventListener("click", refresh);

if (playerOneDice > playerTwoDice) {
  document.querySelector("h1").textContent = "🚩Player 1 wins!";
} else if (playerTwoDice > playerOneDice) {
  document.querySelector("h1").textContent = "Player 2 wins! 🚩";
} else {
  document.querySelector("h1").textContent = "🚩 Draw! 🚩";
}
