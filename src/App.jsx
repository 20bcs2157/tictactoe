import React, { useState } from 'react';
import Board from './components/Board';
import History from './components/History';
import { calculateWinner } from './styles/helper';

import './styles/root.scss';

const app = () => {
  const [history, sethistory] = useState([
    { board: Array(9).fill(null), isXNet: true },
  ]);
  const [currentMove, setcurrentMove] = useState(0);

  const current = history[currentMove];

  const winner = calculateWinner(current.board);

  const message = winner
    ? `winner is ${winner}`
    : `next player is ${current.isXNet ? 'X' : '0'}`;

  const handleSquareclick = position => {
    if (current.board[position] || winner) {
      return;
    }

    sethistory(prev => {
      const last = prev[prev.length - 1];

      const newboard = last.board.map((Square, pos) => {
        if (pos === position) {
          return last.isXNet ? 'X' : '0';
        }
        return Square;
      });

      return prev.concat({ board: newboard, isXNet: !last.isXNet });
    });
    setcurrentMove(prev => prev + 1);
  };

  const moveTo = move => {
    setcurrentMove(move);
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE!</h1>
      <h2>{message}</h2>
      <Board board={current.board} handleSquareclick={handleSquareclick} />
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
};
export default app;
