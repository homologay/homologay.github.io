const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");

import init, { greet } from "./julia.js";

const yes = () => {
  playPauseButton.textContent = "uh";
  alert("you like wasm");
};

const no = () => {
  playPauseButton.textContent = "samesies";
  alert("yeah.. true");
};

playPauseButton.addEventListener("click", event => {
  if (isPaused()) {
    play();
  } else {
    pause();
  }
});
