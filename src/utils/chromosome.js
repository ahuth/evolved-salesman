import _ from 'lodash';
import * as Point from './point';

export function create(cities) {
  return {
    path: cities,
    cost: measureFitness(cities),
  };
}

export function mutate(chromosome) {
  const path = chromosome.path;
  const firstIndex = _.random(0, path.length - 1);
  const secondIndex = _.random(0, path.length - 1);
  const temp = path[firstIndex];

  path[firstIndex] = path[secondIndex]; // eslint-disable-line no-param-reassign
  path[secondIndex] = temp; // eslint-disable-line no-param-reassign

  return chromosome;
}

export function mate(a, b) {
  const crossoverPoint = Math.round(a.path.length / 2);
  const firstPart = _.take(a.path, crossoverPoint);
  const secondPart = _.without(b.path, ...firstPart);

  return create(firstPart.concat(secondPart));
}

export function sortValue(a, b) {
  if (a.cost < b.cost) {
    return -1;
  }

  if (a.cost > b.cost) {
    return 1;
  }

  return 0;
}

function measureFitness(path) {
  const pairs = _.dropRight(_.zip(path, _.tail(path)), 1);
  return pairs.reduce((sum, [a, b]) => {
    return sum + Point.distance(a, b);
  }, 0);
}
