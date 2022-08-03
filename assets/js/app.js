const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById('win');
const computerScore_span = document.getElementById('lose');
const resultDiv = document.querySelector('.result');
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

function game(userChoice) {
    const computerChoice = getComputerCoice();
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