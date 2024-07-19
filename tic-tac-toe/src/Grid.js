function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Grid({ xIsNext, squares, onPlay }) {
  let winner = calculateWinner(squares);

  function handleClick(i) {
    if (squares[i] || winner[0]) return;
    const nextSquares = squares.slice();
    if (xIsNext) nextSquares[i] = "X";
    else nextSquares[i] = "O";
    onPlay(nextSquares);
  }

  let status;
  let strikeClass;
  if (winner[0]) {
    status = "Winner: " + winner[0] + " 🥳";
  } else if (squares.filter((i) => i === null).length === 0) {
    status = "Tie! Game ended";
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  switch (winner[1]) {
    case 0:
      strikeClass = "strike-row-1";
      break;
    case 1:
      strikeClass = "strike-row-2";
      break;
    case 2:
      strikeClass = "strike-row-3";
      break;
    case 3:
      strikeClass = "strike-column-1";
      break;
    case 4:
      strikeClass = "strike-column-2";
      break;
    case 5:
      strikeClass = "strike-column-3";
      break;
    case 6:
      strikeClass = "strike-diagonal-1";
      break;
    case 7:
      strikeClass = "strike-diagonal-2";
      break;
    default:
      break;
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
      <div className={strikeClass}></div>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], // row 1
    [3, 4, 5], // row 2
    [6, 7, 8], // row 3
    [0, 3, 6], // column 1
    [1, 4, 7], // column 2
    [2, 5, 8], // column 3
    [0, 4, 8], // diagonal 1
    [2, 4, 6], // diagonal 2
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      var audio = new Audio("win.wav");
      audio.play();
      return [squares[a], i]; // winner, index
    }
  }
  return [null, null];
}
