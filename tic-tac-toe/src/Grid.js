function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Grid({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return;
    const nextSquares = squares.slice();
    if (xIsNext) nextSquares[i] = "X";
    else nextSquares[i] = "O";
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner + " 🥳";
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  function getGrid() {
    const grid = [];
    for (let i = 0; i < 3; i++) {
      const squareList = [];
      for (let j = 0; j < 3; j++) {
        squareList.push(
          <Square
            key={i * 3 + j}
            value={squares[i * 3 + j]}
            onSquareClick={() => handleClick(i * 3 + j)}
          />
        );
      }
      grid.push(<div className="board-row">{squareList}</div>);
    }
    return grid;
  }

  return (
    <>
      <div className="status">{status}</div>
      {getGrid()}
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      var audio = new Audio("win.wav");
      audio.play();
      return squares[a];
    }
  }
  return null;
}
