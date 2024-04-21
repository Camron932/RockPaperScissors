let userName = "User";

function user() {
    userName = prompt('Please enter desired User name');
    document.getElementById("newUser").innerHTML = `Current User Name: ${userName}.`;
    document.getElementById("userCounter").innerHTML = `${userName} Wins.`;
}
const element = document.getElementById("newUser");
element.addEventListener("click", user);

let compChoice = Math.floor((Math.random()*3) + 1);

    function userRock () {
        if (compChoice == 1) {
            document.getElementById("text").textContent = `Computer chose rock, you have tied. Current score is ${userWins} to ${compWins}.`;

        } else if (compChoice == 2) {
            {userWinCount()}
            document.getElementById("text").textContent = `Computer chose Scissors, ${userName} has won! Current score is ${userWins} to ${compWins}.`; 

        } else {
            {compWinCount()}
            document.getElementById("text").textContent = `Computer chose Paper, ${userName} has lost. Womp womp. Current score is ${userWins} to ${compWins}.`;
        } {
            winCon();
            compChoice = Math.floor((Math.random()*3) + 1);
        }
    }  

    function userPaper () {
        if (compChoice == 1) {
            {userWinCount()}
            document.getElementById("text").textContent = `Computer chose rock, ${userName} has won! Current score is ${userWins} to ${compWins}.`;
    
        } else if (compChoice == 2) {
            {compWinCount()}
            document.getElementById("text").textContent = `Computer chose Scissors, ${userName} has lost. Womp womp. Current score is ${userWins} to ${compWins}.`;
    
        } else {
            document.getElementById("text").textContent = `Computer chose paper, you have tied. Current score is ${userWins} to ${compWins}.`;
        } {
            winCon();
            compChoice = Math.floor((Math.random()*3) + 1);
        }
    }  

    function userScissors () {
        if (compChoice == 1) {
            {compWinCount()}
            document.getElementById("text").textContent = `Computer chose rock, ${userName} has lost. Womp womp. Current score is ${userWins} to ${compWins}.`; 
    
        } else if (compChoice == 2) {
            document.getElementById("text").textContent = `Computer chose scissors, you have tied. Current score is ${userWins} to ${compWins}.`;
    
        } else {
            {userWinCount();} 
            document.getElementById("text").textContent = `Computer chose Paper, ${userName} has won! Current score is ${userWins} to ${compWins}.`; 
        } {
            winCon();
            compChoice = Math.floor((Math.random()*3) + 1);
        }
    } 
let userCounter = document.getElementById('counterWin');
let userWins = 0;

function userWinCount() {
   ++userWins;
   userCounter.innerHTML = userWins;
}

let compCounter = document.getElementById('counterComp');
let compWins = 0;

function compWinCount() {
    ++compWins;
    compCounter.innerHTML = compWins;
}

function reset() {
    userCounter.innerHTML = 0;
    compCounter.innerHTML = 0;
    userWins = 0;
    compWins = 0;
}

let gameStart = false;

function bestOfFive() {
    reset();
    document.getElementById("text").textContent = `A best of 5 game has been started, best of luck ${userName}.`;
    gameStart = true;
}

function winCon() {
    if (gameStart == true) {
        if (userWins < 3 && compWins < 3) {
            return;
         } else if (userWins == 3) {
            alert(`The game has ended, ${userName} wins! The score was ${userWins} to ${compWins}.`);
            {endGame()};
        } else {
            alert(`The game has ended, Computer wins! The score was ${userName}: ${userWins} to Computer: ${compWins}.`);
            {endGame()};
        } 
    } else {
        return;
    }
}  

function endGame() {
    gameStart = false;
}
  
    


   
    
                 



