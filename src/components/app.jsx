import React from 'react';
import Cities from './cities';
import Point from '../utils/point';

export default function App() {
  return (
    <Cities
      cities={[
        new Point(20, 80, 1),
        new Point(60, 50, 2),
      ]}
    />
  );
}
