import React, { useState } from 'react';
import Board from './components/Board';
import { calculateWinner } from './styles/helper';

import './styles/root.scss';

const app = () => {
  const [board, setboard] = useState(Array(9).fill(null));
  const [isXNet, setIsXNet] = useState(false);

  const winner = calculateWinner(board);

  const message = winner
    ? `winner is ${winner}`
    : `next player is ${isXNet ? 'X' : '0'}`;

  const handleSquareclick = position => {
    if (board[position] || winner) {
      return;
    }

    setboard(prev => {
      return prev.map((Square, pos) => {
        if (pos === position) {
          return isXNet ? 'X' : '0';
        }
        return Square;
      });
    });
    setIsXNet(prev => !prev);
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE!</h1>
      <h2>{message}</h2>
      <Board board={board} handleSquareclick={handleSquareclick} />
    </div>
  );
};
export default app;
