import React from 'react';

export default function Cities({ cities }) {
  return (
    <svg
      height="500"
      width="500"
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
    </svg>
  );
}
