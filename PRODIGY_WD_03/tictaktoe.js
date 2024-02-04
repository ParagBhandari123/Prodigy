let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function handleClick(index) {
  if (gameBoard[index] === '' && gameActive) {
    gameBoard[index] = currentPlayer;
    document.getElementById('status').innerText = `Player ${currentPlayer}'s turn`;
    document.getElementById('board').children[index].innerText = currentPlayer;

    if (checkWinner()) {
      document.getElementById('status').innerText = `Player ${currentPlayer} wins!`;
      gameActive = false;
    } else if (isBoardFull()) {
      document.getElementById('status').innerText = "It's a draw!";
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function checkWinner() {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      return true;
    }
  }

  return false;
}

function isBoardFull() {
  return !gameBoard.includes('');
}

function resetGame() {
  currentPlayer = 'X';
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;

  document.getElementById('status').innerText = `Player ${currentPlayer}'s turn`;

  const cells = document.getElementById('board').children;
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = '';
  }
}
