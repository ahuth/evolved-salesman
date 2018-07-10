import Point from './point';
import random from './random';

export default function randomCities(count, maxX = 100, maxY = 100) {
  return new Array(count).fill(0).map(() => {
    return new Point(
      random(0, maxX),
      random(0, maxY),
    );
  });
}
