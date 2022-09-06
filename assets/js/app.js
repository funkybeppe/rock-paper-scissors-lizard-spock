// Global variables to set the starting score
let userScore = 0;
let computerScore = 0;

// Global variables to target score section and game message 
const userScore_span = document.getElementById('win');
const computerScore_span = document.getElementById('lose');
const result_p = document.querySelector('.result > p');

// Global variables to assign game icons
const rockDiv = document.getElementById('r');
const paperDiv = document.getElementById('p');
const scissorsDiv = document.getElementById('s');
const lizardDiv = document.getElementById('l');
const spockDiv = document.getElementById('v');

// Global variable to target end game screen content
let txtEndTitle = document.getElementById('txtEndTitle');
let txtEndMessage = document.getElementById('txtEndMessage');

// Get computer random choice 
function getComputerCoice() {
    // Choices 
    const choices  = ['r','p','s','l','v'];
    const randomNumber = Math.floor(Math.random() * 5);
    return choices[randomNumber];
}
// Convert the letter to the correspondant word
function convertToWord(letter) {
    if (letter === 'r') return "Rock";
    if (letter === 'p') return "Paper";
    if (letter === 's') return "Scissors";
    if (letter === 'l') return "Lizard";
    return "Spock";
}

// Update the score when the player wins
function win(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;

    // Throw a message with the selections and if the 5th win has been reached will throw the end game screen too
    if (userScore < 5) {
        result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win! 😄 `;
    } else if(userScore === 5){
        txtEndTitle.innerHTML=`GAME OVER!`;
        txtEndMessage.innerHTML=`You Win 🎉`;
        endGame();
    }
    // Add a green glow effect to the winning selection icon
    userChoice_div.classList.add('green-glow');
    setTimeout(function() {userChoice_div.classList.remove('green-glow'); }, 300 );
}

// Update the score when the computer wins
function lose(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;

    // Throw a message with the selections and if the 5th win has been reached will throw the end game screen too
    if (computerScore < 5){
        result_p.innerHTML = `${convertToWord(computerChoice)} beats ${convertToWord(userChoice)}. You lose 😢 `;
    } else if(computerScore === 5){
        txtEndTitle.innerHTML=`GAME OVER!`;
        txtEndMessage.innerHTML=`You lose 😔`;
        endGame();
    }

    // Add a red glow effect to the losing selection icon
    userChoice_div.classList.add('red-glow');
    setTimeout(function() {userChoice_div.classList.remove('red-glow'); }, 300 );
}

// When computer and player selection is the same throws a message and does not update the score
function draw(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}. It's a draw 😐 `;

    // Adds a yellow glow effect to the selection
    userChoice_div.classList.add('yellow-glow');
    setTimeout(function() {userChoice_div.classList.remove('yellow-glow'); }, 300 );
}

// Match all the selections and determine the winning, losing and tie outcomes
function game(userChoice) {
    const computerChoice = getComputerCoice();
    switch(userChoice + computerChoice) {
        case "rs": 
        case "rl":
        case "pr":
        case "pv":
        case "sp":
        case "sl":
        case "lp":
        case "lv":
        case "vr":
        case "vs":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "rv":
        case "ps":
        case "pl":
        case "sr":
        case "sv":
        case "lr":
        case "ls":
        case "vp":
        case "vl":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
        case "ll":
        case "vv":
            draw(userChoice, computerChoice);
            break;
    }
}

// Remove the Start Game screen 
function startGame() {
    document.getElementById('introScreen').style.display = 'none';
}

// Show the end game screen 
function endGame() {
    document.getElementById('endScreen').style.display = 'block';
}

// Remove the end game screen and reset the scores
function replay() {
    document.getElementById('endScreen').style.display = 'none';
    result_p.innerHTML = "Make your choice"
    restartScores();
}
  
// Reset the scores to 0
function restartScores() {

    userScore = 0;
    computerScore = 0;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;

}
  
// Assign a specific letter to a specific icon after user click
function main() {

    rockDiv.addEventListener('click', () => game("r"));

    paperDiv.addEventListener('click', () => game("p"));

    scissorsDiv.addEventListener('click', () => game("s"));

    lizardDiv.addEventListener('click', () => game("l"));

    spockDiv.addEventListener('click', () => game("v"));

    document.getElementById('endScreen').style.display = 'none';
    
}

main();


