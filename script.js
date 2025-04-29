let currentBet = 100;
let balance = 1000;
let greed = 0;

function updateValues() {
  document.getElementById("currentBet").value = currentBet;
  document.getElementById("balance").value = balance.toFixed(2);
  document.getElementById("greed-fill").style.width = `${greed}%`;
}

function win() {
  balance += currentBet * 0.5;
  currentBet = 100;
  adjustGreed(-5);
  updateValues();
}

function lose() {
  balance -= currentBet;
  currentBet *= 2;
  adjustGreed(10);
  updateValues();
}

function adjustGreed(amount) {
  greed += amount;
  if (greed < 0) greed = 0;
  if (greed > 100) greed = 100;
}

function reset() {
  currentBet = 100;
  balance = 1000;
  greed = 0;
  updateValues();
}

document.addEventListener("DOMContentLoaded", updateValues);
