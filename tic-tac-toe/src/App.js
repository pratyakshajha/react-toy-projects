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

  let moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      return;
    }
    return (
      <div key={move}>
        {move == currentMove ? (
          "You are at move # " + currentMove
        ) : (
          <button onClick={() => jumpTo(move)}>{description}</button>
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
        <div>{moves}</div>
        <button onClick={handleReset}>Reset Game</button>
      </div>
    </div>
  );
}
