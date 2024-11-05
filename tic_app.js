// Game state
let currentPlayer = 'X';
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];

// Winning combinations
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// DOM elements
const boxes = document.querySelectorAll('.box');
const resetButton = document.getElementById('reset');

// Add click handlers
boxes.forEach((box, index) => {
    box.addEventListener('click', () => handleClick(box, index));
});

resetButton.addEventListener('click', resetGame);

function handleClick(box, index) {
    if (gameState[index] !== '' || !gameActive) {
        return;
    }

    // Update game state and UI
    gameState[index] = currentPlayer;
    box.textContent = currentPlayer;
    
    // Check for win or draw
    if (checkWin()) {
        highlightWinner();
        gameActive = false;
        return;
    }

    if (checkDraw()) {
        gameActive = false;
        return;
    }

    // Switch player
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWin() {
    return winningConditions.some(condition => {
        return condition.every(index => {
            return gameState[index] === currentPlayer;
        });
    });
}

function checkDraw() {
    return !gameState.includes('');
}

function highlightWinner() {
    winningConditions.forEach(condition => {
        if (condition.every(index => gameState[index] === currentPlayer)) {
            condition.forEach(index => {
                boxes[index].classList.add('winner');
            });
        }
    });
}

function resetGame() {
    currentPlayer = 'X';
    gameActive = true;
    gameState = ['', '', '', '', '', '', '', '', ''];
    boxes.forEach(box => {
        box.textContent = '';
        box.classList.remove('winner');
    });
}