import React from 'react';
import pointsToLineCommands from '../utils/points-to-line-commands';

export default function Cities({ cities, path }) {
  return (
    <svg
      height="500"
      width="500"
      style={styles.container}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      {cities.map(city => (
        <circle
          cx={city.x}
          cy={city.y}
          key={city.id}
          r="1"
        />
      ))}
      {path && (
        <path
          d={pointsToLineCommands(path)}
          fill="transparent"
          stroke="black"
        />
      )}
    </svg>
  );
}

const styles = {
  container: {
    padding: '1rem',
  },
};
