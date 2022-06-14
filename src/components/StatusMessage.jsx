import React from 'react';

const StatusMessage = ({ winner, current }) => {
  const noMovesLeft = current.board.every(el => el !== null);
  return (
    <div className="status-message">
      {winner && (
        <>
          winner is{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      )}

      {!winner && !noMovesLeft && (
        <>
          next player is{' '}
          <span className={current.isXNet ? 'text-green' : 'text-orange'}>
            {current.isXNet ? 'X' : '0'}
          </span>
        </>
      )}
      {!winner && noMovesLeft && (
        <>
          <span className="text-green">X</span> and{' '}
          <span className="text-orange">0</span> tied
        </>
      )}
    </div>
  );
};

export default StatusMessage;
