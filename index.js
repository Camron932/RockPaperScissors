let userName = "User";

function user() {
    userName = prompt('Please enter desired User name');
    document.getElementById("newUser").innerHTML = `Current User Name: ${userName}.`;
}
const element = document.getElementById("newUser");
element.addEventListener("click", user);

let compChoice = Math.floor((Math.random()*3) + 1);

    function userRock () {
        if (compChoice == 1) {
            document.getElementById("text").textContent = "Computer chose rock, you have tied.";

        } else if (compChoice == 2) {
            document.getElementById("text").textContent = `Computer chose Scissors, ${userName} has won!`; {
                userWinCount();
            }

        } else {
            document.getElementById("text").textContent = `Computer chose Paper, ${userName} has lost. Womp womp.`; {
                compWinCount();
            }
        } {
            compChoice = Math.floor((Math.random()*3) + 1);
        }
    }  

    function userPaper () {
        if (compChoice == 1) {
            document.getElementById("text").textContent = `Computer chose rock, ${userName} has won!`; {
                userWinCount();
            }
    
        } else if (compChoice == 2) {
            document.getElementById("text").textContent = `Computer chose Scissors, ${userName} has lost. Womp womp.`; {
                compWinCount();
            }
    
        } else {
            document.getElementById("text").textContent = "Computer chose Paper, you have tied.";
        } {
            compChoice = Math.floor((Math.random()*3) + 1);
        }
    }  

    function userScissors () {
        if (compChoice == 1) {
            document.getElementById("text").textContent = `Computer chose rock, ${userName} has lost. Womp womp.`; {
                compWinCount();
            }
    
        } else if (compChoice == 2) {
            document.getElementById("text").textContent = "Computer chose Scissors, you have tied.";
    
        } else {
            document.getElementById("text").textContent = `Computer chose Paper, ${userName} has won!`; {
                userWinCount();
            }
        } {
            compChoice = Math.floor((Math.random()*3) + 1);
        }
    } 
let userCounter = document.getElementById('counterWin');
let userWins = 0;

function userWinCount() {
   userWins ++;
   userCounter.innerHTML = userWins;
}

let compCounter = document.getElementById('counterComp');
let compWins = 0;

function compWinCount() {
    compWins++;
    compCounter.innerHTML = compWins;
}

function reset() {
    userCounter.innerHTML = 0;
    compCounter.innerHTML = 0;
    userWins = 0;
    compWins = 0;
}

const choiceRock = document.getElementById("rock");
element.addEventListener("click", userRock);

const choicePaper = document.getElementById("paper");
element.addEventListener("click", userPaper);

const choiceScissors = document.getElementById("scissors");
element.addEventListener("click", userScissors);

function bestOfFive() {
    let choice = prompt("Choice?");
    let userChoice = choice.toLowerCase();
        compChoice = Math.floor((Math.random()*3) + 1); {
                if (userChoice == "rock") {
                    userRock();
                } else if (userChoice == "paper") {
                    userPaper();
                } else if (userChoice == "scissors") {
                    userScissors();
                } else {
                    alert(`Please choose either: Rock, Paper, or Scissors`);
                    bestOfFive();
                }
                
                if (userWins < 3 && compWins < 3) {
                    alert(`Current score is ${userName}: ${userWins} to Computer: ${compWins}.`);
                    bestOfFive(); 
                 } else if (userWins == 3) {
                    document.getElementById("text").textContent = `The game has ended, ${userName} wins! The score was ${userWins} to ${compWins}.`
                } else {
                    document.getElementById("text").textContent = `The game has ended, Computer wins! The score was ${userName}: ${userWins} to Computer: ${compWins}.`;  
                } {
                    compChoice = Math.floor((Math.random()*3) + 1); 
                } 
            }
    }
  
    


   
    
                 



