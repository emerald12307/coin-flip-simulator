// COIN FLIP SIMULATOR

//HTML Variables
let outputEl = document.getElementById("output");
let headEl = document.getElementById("heads-out");
let tailsEl = document.getElementById("tails-out");
let onesEl = document.getElementById("ones-out");
let twosEl = document.getElementById("twos-out");
let threesEl = document.getElementById("threes-out");
let foursEl = document.getElementById("fours-out");
let fivesEl = document.getElementById("fives-out");
let sixesEl = document.getElementById("sixes-out");
let diceOutputEl = document.getElementById("dice-output");

//Count Variables
let numHeads = 0;
let numTails = 0;
let numOnes = 0;
let numTwos = 0;
let numThrees = 0;
let numFours = 0;
let numFives = 0;
let numSixes = 0;

//Button Event Lisetner
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  //Generate a rrandom number
  let randNum = Math.random();
  console.log(randNum);

  //Simulate the coin flip
  if (randNum < 0.5) {
    outputEl.innerHTML = "<img src='img/heads.png'>";
    numHeads = numHeads + 1;
    headEl.innerHTML = numHeads;
  } else {
    outputEl.innerHTML = "<img src='img/tails.png'>";
    numTails = numTails + 1;
    tailsEl.innerHTML = numTails;
  }
}

document
  .getElementById("roll-dice-btn")
  .addEventListener("click", diceBtnClicked);

function diceBtnClicked() {
  let randNum = Math.random();
  //Dice Roll
  if (randNum < 0.166) {
    diceOutputEl.innerHTML = "<img src='img/1.png'>";
    numOnes = numOnes + 1;
    onesEl.innerHTML = numOnes;
  } else if (randNum < 0.333) {
    diceOutputEl.innerHTML = "<img src='img/2.png'>";
    numTwos = numTwos + 1;
    twosEl.innerHTML = numTwos;
  } else if (randNum < 0.5) {
    diceOutputEl.innerHTML = "<img src='img/3.png'>";
    numThrees = numThrees + 1;
    threesEl.innerHTML = numThrees;
  } else if (randNum < 0.666) {
    diceOutputEl.innerHTML = "<img src='img/4.png'>";
    numFours = numFours + 1;
    foursEl.innerHTML = numFours;
  } else if (randNum < 0.833) {
    diceOutputEl.innerHTML = "<img src='img/5.png'>";
    numFives = numFives + 1;
    fivesEl.innerHTML = numFives;
  } else {
    diceOutputEl.innerHTML = "<img src='img/6.png'>";
    numSixes = numSixes + 1;
    sixesEl.innerHTML = numSixes;
  }
}
