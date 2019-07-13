let userScore = 0;
let compScore = 0;

const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreboard_section = document.querySelector(".score-board");
const messege = document.getElementById("messege");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissor = document.getElementById("s");
const reset = document.getElementById("res");

function getComputerChoice() {
  const Choice = ["r", "p", "s"];
  const rNumber = Math.floor(Math.random() * 3);
  return Choice[rNumber];
}
function letterToWord(letter) {
  if (letter === "r") return "ROCK";
  if (letter === "p") return "PAPER";
  return "SCISSOR";
}
function win(userChoice, compChoice) {
  userScore += 1;
  userScore_span.innerHTML = userScore;
  messege.innerHTML = `USER CHOSE : ${letterToWord(
    userChoice
  )} , COMPUTER GOT : ${letterToWord(compChoice)}. USER WINS!`;
}

function lose(userChoice, compChoice) {
  compScore += 1;
  compScore_span.innerHTML = compScore;
  messege.innerHTML = `USER CHOSE : ${letterToWord(
    userChoice
  )} , COMPUTER GOT : ${letterToWord(compChoice)}. COMP WINS!`;
}

function Draw() {
  messege.innerHTML = "ITS A DRAW";
}

function gameIsOn(userChoice) {
  const compChoice = getComputerChoice();
  switch (userChoice + compChoice) {
    case "pr":
    case "rs":
    case "sp":
      win(userChoice, compChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, compChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      Draw();
      break;
  }
}

reset.addEventListener("click", () => {
  userScore = 0;
  compScore = 0;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
});

rock.addEventListener("click", () => {
  gameIsOn("r");
});

paper.addEventListener("click", () => {
  gameIsOn("p");
});

scissor.addEventListener("click", () => {
  gameIsOn("s");
});
