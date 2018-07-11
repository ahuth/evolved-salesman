import Population from '../utils/population';

export default function newSolution({ cities }) {
  const population = Population.create(cities);

  return {
    path: Population.evolve(population).path,
  };
}
