import { dropRight, random, tail, take, without, zip } from 'lodash';
import * as Point from './point';

export function create(cities) {
  return {
    path: cities,
    cost: measureFitness(cities),
  };
}

// Get the cost (AKA "fitness") of a chromosome. Lower cost is "better".
export function cost(chromosome) {
  return chromosome.cost;
}

// Mutate a chromosome by swapping random pairs of items in its path.
export function mutate(chromosome) {
  const path = chromosome.path;
  const firstIndex = random(0, path.length - 1);
  const secondIndex = random(0, path.length - 1);
  const temp = path[firstIndex];

  path[firstIndex] = path[secondIndex]; // eslint-disable-line no-param-reassign
  path[secondIndex] = temp; // eslint-disable-line no-param-reassign

  return chromosome;
}

// Combine paths from two chromosomes.
export function mate(a, b) {
  const crossoverPoint = Math.round(a.path.length / 2);
  const firstPart = take(a.path, crossoverPoint);
  const secondPart = without(b.path, ...firstPart);

  return create(firstPart.concat(secondPart));
}

// Return the values necessary to sort two chromsomes based on their costs.
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
  const pairs = dropRight(zip(path, tail(path)), 1);
  return pairs.reduce((sum, [a, b]) => {
    return sum + Point.distance(a, b);
  }, 0);
}
