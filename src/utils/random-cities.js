import { random } from 'lodash';
import * as Point from './point';

export default function randomCities(count, maxX = 100, maxY = 100) {
  return new Array(count).fill(0).map(() => {
    return Point.create(
      random(0, maxX),
      random(0, maxY),
    );
  });
}
