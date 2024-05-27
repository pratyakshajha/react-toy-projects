import { useState } from "react";
import Grid from "./Grid";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function handleReset(nextSquares) {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
    jumpTo(0);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  // TODO
  function getLocation(move) {
    console.log(history[move]);
    return "x, y";
  }

  let moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move # " + move + " ( " + getLocation(move) + " )";
    } else {
      return;
    }
    return (
      <div key={move}>
        {move == currentMove ? (
          <div class="current-move"> You are at move # {currentMove} </div>
        ) : (
          <button class="move-history" onClick={() => jumpTo(move)}>
            {description}
          </button>
        )}
      </div>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Grid xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <button onClick={handleReset}>Reset Game</button>
        <div>{moves}</div>
      </div>
    </div>
  );
}
