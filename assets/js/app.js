let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('win');
const computerScore_span = document.getElementById('lose');
const result_p = document.querySelector('.result > p');
const rockDiv = document.getElementById('r');
const paperDiv = document.getElementById('p');
const scissorsDiv = document.getElementById('s');
const lizardDiv = document.getElementById('l');
const spockDiv = document.getElementById('v');

function getComputerCoice() {
    const choices  = ['r','p','s','l','v'];
    const randomNumber = Math.floor(Math.random() * 5);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === 'r') return "Rock";
    if (letter === 'p') return "Paper";
    if (letter === 's') return "Scissors";
    if (letter === 'l') return "Lizard";
    return "Spock";
}

function win(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win! 🎉`;
    userChoice_div.classList.add('green-glow');
    setTimeout(function() {userChoice_div.classList.remove('green-glow') }, 300 );

}

function lose(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. You lose 😢`;
    userChoice_div.classList.add('red-glow');
    setTimeout(function() {userChoice_div.classList.remove('red-glow') }, 300 );
}

function draw(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}. It's a draw 😐 `;
    userChoice_div.classList.add('yellow-glow');
    setTimeout(function() {userChoice_div.classList.remove('yellow-glow') }, 300 );
}
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

function main() {

    rockDiv.addEventListener ('click', function() {
        game('r')
    });
    
    paperDiv.addEventListener ('click', function() {
        game('p')
    });
    
    scissorsDiv.addEventListener ('click', function() {
        game('s')
    });
    
    lizardDiv.addEventListener ('click', function() {
        game('l')
    });
    
    spockDiv.addEventListener ('click', function() {
        game('v')   
    });
}
main()