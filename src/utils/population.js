import { shuffle } from 'lodash';
import * as Chromosome from './chromosome';

export function create(cities, size = 100) {
  return {
    chromosomes: new Array(size).fill(0).map(() => {
      return Chromosome.create(shuffle(cities));
    }),
  };
}

export function evolve(population) {
  return population.chromosomes[0];
}
