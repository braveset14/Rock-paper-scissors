function getComputerChoice(){
    let num= Math.random();
    let random= Math.floor(num*3);
    if(random===0) {return "rock";}
     if(random===1) {return "paper";}
     else { return "scissors";}
}
function getHumanChoice(){
    const choice=prompt("Please Enter your choice!!!");
    return choice;
}
let humanScore=0;
let computerScore=0;
function playRound(){
   let humanChoice=getHumanChoice();
   let human=humanChoice.toLowerCase();
   let computerChoice=getComputerChoice();
   let computer=computerChoice.toLowerCase();
   if(human==computer) console.log("You are tied!!!");
   else if(human=="rock" && computer=="paper") {console.log("You Lose! Paper beats Rock.");computerScore++;}
   else if(human=="paper" && computer=="rock") {console.log("You Win! Paper beats Rock."); humanScore++;}
   else if(human=="scissors" && computer=="rock") {console.log("You Lose! Rock beats Scissors.");computerScore++;}
   else if(computer=="scissors" && human=="rock") {console.log("You Win! Rock beats Scissors.");humanScore++;}
  else if(human=="scissors" && computer=="paper") {console.log("You Win! Scissors beats Paper.");humanScore++;}
  else  {console.log("You Lose! Scissors beats Paper."); computerScore++;}
  return "";
}
function playGame(){
    for(let i=0;i<5;i++){
        playRound();
    }
    if(humanScore>computerScore) console.log("You Won "+ humanScore+" Out of 5 games!!! " );
    if (computerScore>humanScore) console.log("You Lost "+ computerScore+" Out of 5 games!!! ");
    else{ console.log("You are Tied With a Score of "+ computerScore);}
    return "";
}
console.log(playGame());