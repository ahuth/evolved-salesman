import React from 'react';

export default function Controls({ count, onCountChange, onNewClick, onSolveClick }) {
  return (
    <div>
      <button onClick={onNewClick} type="button">
        New Cities
      </button>
      <input
        min="2"
        max="50"
        onChange={onCountChange}
        type="number"
        value={count}
      />
      <button onClick={onSolveClick} type="button">
        Solve!
      </button>
    </div>
  );
}
