import { dropRight, tail, zip } from 'lodash';
import * as Point from './point';

export function create(cities) {
  return {
    path: cities,
    cost: measureFitness(cities),
  };
}

function measureFitness(path) {
  const pairs = dropRight(zip(path, tail(path)), 1);
  return pairs.reduce((sum, [a, b]) => {
    return sum + Point.distance(a, b);
  }, 0);
}
