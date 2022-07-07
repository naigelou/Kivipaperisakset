let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const voittoMusiikkir = new Audio("audio/rockv.mp3");
const voittoMusiikkis = new Audio("audio/saksetv.mp3");
const voittoMusiikkip = new Audio("audio/paperv.mp3");
const havioMusiikki = new Audio("audio/lose.mp3");
const drawMusiikki = new Audio("audio/draw.mp3");
const duelmusiikki = new Audio("audio/duel.mp3");
const actionMessage_p = document.getElementById("action-message");









function getComputerChoice(){
  const choices = ['r','p','s'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function converToWord(letter){
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

function win(userChoice, computerChoice){
  if (userChoice === "r"){
      voittoMusiikkir.play();}
  if (userChoice === "s"){
      voittoMusiikkis.play();}
  if (userChoice === "p"){
      voittoMusiikkip.play();}
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "Yugi".fontsize(3).sub();
  const smallCompWord = "Kaiba".fontsize(3).sub();
  result_p.innerHTML = `${converToWord(userChoice)}${smallUserWord} beats ${converToWord(computerChoice)}${smallCompWord} You win!`;

}

function lose(userChoice, computerChoice){
  havioMusiikki.play();
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "Yugi".fontsize(3).sub();
  const smallCompWord = "Kaiba".fontsize(3).sub();
  result_p.innerHTML = `${converToWord(userChoice)}${smallUserWord} loses to ${converToWord(computerChoice)}${smallCompWord} You lose!`;
}

function draw(userChoice, computerChoice){
  drawMusiikki.play();
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "Yugi".fontsize(3).sub();
  const smallCompWord = "Kaiba".fontsize(3).sub();
  result_p.innerHTML = `${converToWord(userChoice)}${smallUserWord} equals  ${converToWord(computerChoice)}${smallCompWord} Draw`;
}



function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice){
    case "rs":
    case "pr":
    case "sp":
      win(userChoice,computerChoice);
      break;
    case "sr":
    case "ps":
    case "rp":
      lose(userChoice,computerChoice);
      break;
    case "rr":
    case "ss":
    case "pp":
      draw(userChoice,computerChoice);
      break;
      }
    }



function main() {
  rock_div.addEventListener('click' , function(){
    game("r")
  })

  paper_div.addEventListener('click' , function(){
    game("p");
  })

  scissors_div.addEventListener('click' , function(){
    game("s");
  })
  actionMessage_p.addEventListener('click' ,function(){
    duelmusiikki.play();
  })
}



main();
