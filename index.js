let compChoice = Math.floor((Math.random()*3) + 1);

    function userRock () {
        if (compChoice == 1) {
            document.getElementById("text").textContent = "Computer chose rock, you have tied.";

        } else if (compChoice == 2) {
            document.getElementById("text").textContent = "Computer chose Scissors, you win!"; {
                userWinCount();
            }

        } else {
            document.getElementById("text").textContent = "Computer chose Paper, you have lost. Womp womp."; {
                compWinCount();
            }
        } {
            compChoice = Math.floor((Math.random()*3) + 1);
        }
    }  

    function userPaper () {
        if (compChoice == 1) {
            document.getElementById("text").textContent = "Computer chose rock, you win!"; {
                userWinCount();
            }
    
        } else if (compChoice == 2) {
            document.getElementById("text").textContent = "Computer chose Scissors, you have lost. Womp womp."; {
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
            document.getElementById("text").textContent = "Computer chose rock, you have lost. Womp womp."; {
                compWinCount();
            }
    
        } else if (compChoice == 2) {
            document.getElementById("text").textContent = "Computer chose Scissors, you have tied.";
    
        } else {
            document.getElementById("text").textContent = "Computer chose Paper, you win!"; {
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