import React, { useState } from 'react';
import Square from './Square';

const Board = () => {
  const [board, setboard] = useState(Array(9).fill(null));
  const [isXNet, setIsXNet] = useState(false);

  const handleSquareclick = position => {
    if (board[position]) {
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

  const renderSquare = position => {
    return (
      <Square
        value={board[position]}
        onClick={() => handleSquareclick(position)}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
