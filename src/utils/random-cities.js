import _ from 'lodash';
import * as Point from './point';

export default function randomCities(count, maxX = 100, maxY = 100) {
  return new Array(count).fill(0).map(() => {
    return Point.create(
      _.random(0, maxX),
      _.random(0, maxY),
    );
  });
}
