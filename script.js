// Game variables
let score = 0;
let timer = 10;
let gameOver = false;

// Get references to the DOM elements
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");
const gameButton = document.getElementById("gameButton");
const gameOverMessage = document.getElementById("gameOverMessage");

// Update the score display
function updateScore() {
    scoreDisplay.textContent = score;
}

// Start the timer countdown
function startTimer() {
    const timerInterval = setInterval(() => {
        if (timer <= 0) {
            clearInterval(timerInterval);
            gameOver = true;
            gameOverMessage.textContent = "Game Over! Your final score is: " + score;
        } else {
            timer--;
            timerDisplay.textContent = timer;
        }
    }, 1000);
}

// Move the button to a random position on the screen
function moveButton() {
    if (!gameOver) {
        const x = Math.random() * (window.innerWidth - gameButton.offsetWidth);
        const y = Math.random() * (window.innerHeight - gameButton.offsetHeight);

        gameButton.style.left = `${x}px`;
        gameButton.style.top = `${y}px`;
    }
}

// Button click event handler
gameButton.addEventListener("click", () => {
    if (!gameOver) {
        score++;
        updateScore();
        moveButton();
    }
});

// Start the game
function startGame() {
    gameOver = false;
    score = 0;
    timer = 10;
    scoreDisplay.textContent = score;
    timerDisplay.textContent = timer;
    gameOverMessage.textContent = "";

    startTimer();
    moveButton();
}

// Initial game start
startGame();
