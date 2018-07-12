import React from 'react';

export default function Controls({
  count,
  onClearClick,
  onCountChange,
  onNewClick,
  onRandomClick,
  onSolveClick,
}) {
  return (
    <div>
      <button onClick={onNewClick} type="button">
        New Cities
      </button>
      <input
        min="2"
        max="50"
        onChange={onCountChange}
        style={styles.count}
        type="number"
        value={count}
      />
      <button onClick={onClearClick} type="button">
        Clear
      </button>
      <button onClick={onRandomClick} type="button">
        Random Solution
      </button>
      <button onClick={onSolveClick} type="button">
        Solve!
      </button>
    </div>
  );
}

const styles = {
  count: {
    width: 50,
  },
};
