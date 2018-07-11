import Population from '../utils/population';

export default function newSolution({ cities }) {
  const population = Population.create(cities);
  const fittest = Population.evolve(population);

  return {
    cost: Math.round(fittest.cost),
    path: fittest.path,
  };
}
