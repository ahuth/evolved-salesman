import _ from 'lodash';
import * as Chromosome from './chromosome';

export function create(cities, size = 100) {
  return {
    chromosomes: new Array(size).fill(0).map(() => {
      return Chromosome.create(_.shuffle(cities));
    }),
  };
}

export function evolve(population, maxIterations = 1000, stableLimit = 20, mutations = 5) {
  let best;
  let currentCost = Infinity;
  let nextGeneration = population.chromosomes;
  let stableCount = 0;
  const populationSize = population.chromosomes.length;
  const matingPoolSize = Math.round(populationSize / 2);

  for (let i = 0; i < maxIterations; i++) {
    if (stableCount >= stableLimit) {
      break;
    }

    const matingPool = selectMatingPool(nextGeneration, matingPoolSize);
    nextGeneration = breed(matingPool, populationSize);
    nextGeneration = mutate(nextGeneration, mutations);

    const localBest = getBest(nextGeneration);

    if (localBest.cost < currentCost) {
      best = localBest;
      currentCost = localBest.cost;
      stableCount = 0;
    } else {
      stableCount++;
    }
  }

  return best;
}

function selectMatingPool(population, size) {
  const sortedByCost = population.sort(Chromosome.sortValue);

  return _.take(sortedByCost, size);
}

function breed(population, toSize) {
  const amountNeeded = toSize - population.length;
  const newMembers = new Array(amountNeeded).fill(0).map(() => {
    const [mommy, daddy] = _.sampleSize(population, 2);
    return Chromosome.mate(mommy, daddy);
  });

  return population.concat(newMembers);
}

function mutate(population, mutations) {
  const mutators = _.sampleSize(population, mutations);

  mutators.forEach(Chromosome.mutate);
  return population;
}

function getBest(population) {
  return _.minBy(population, chromosome => chromosome.cost);
}
