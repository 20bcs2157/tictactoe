import React, { useState } from 'react';
import { SassColor } from 'sass';
import Board from './components/Board';
import History from './components/History';
import StatusMessage from './components/StatusMessage';
import { calculateWinner } from './styles/helper';

import './styles/root.scss';

const NEW_GAME = [{ board: Array(9).fill(null), isXNet: true }];

const app = () => {
  const [history, sethistory] = useState([
    { board: Array(9).fill(null), isXNet: true },
  ]);
  const [currentMove, setcurrentMove] = useState(0);

  const current = history[currentMove];

  const { winner, winningSquares } = calculateWinner(current.board);

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

  const onNewGame = () => {
    sethistory(NEW_GAME);
    setcurrentMove(0);
  };

  return (
    <div className="app">
      <h1>
        TIC <span className="text-green">TAC</span> TOE!
      </h1>
      <StatusMessage winner={winner} current={current} />
      <Board
        board={current.board}
        handleSquareclick={handleSquareclick}
        winningSquares={winningSquares}
      />
      <button
        type="button"
        onClick={onNewGame}
        className={`btn-reset ${winner ? 'active' : ' '}`}
      >
        start new game
      </button>
      <h2 style={{ fontWeight: 'normal' }}> current game history</h2>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
      <div className="bg-balls" />
    </div>
  );
};
export default app;
