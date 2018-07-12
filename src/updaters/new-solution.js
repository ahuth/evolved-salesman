import * as Population from '../utils/population';

export default function newSolution({ bestCost = Infinity, cities }) {
  const population = Population.create(cities);
  const fittest = Population.evolve(population);
  const cost = Math.round(fittest.cost);

  return {
    bestCost: Math.min(bestCost, cost),
    currentCost: cost,
    path: fittest.path,
  };
}
