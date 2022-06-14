import React from 'react';

const StatusMessage = ({ winner, current }) => {
  const noMovesLeft = current.board.every(el => el !== null);
  return (
    <h2>
      {winner && `winner is ${winner}`}
      {!winner &&
        !noMovesLeft &&
        `next player is ${current.isXNet ? 'X' : '0'}`}
      {!winner && noMovesLeft && 'X and 0 tied'}
    </h2>
  );
};

export default StatusMessage;