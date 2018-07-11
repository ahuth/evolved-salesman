import { shuffle } from 'lodash';
import Chromosome from './chromosome';

export default {
  create(cities, size = 100) {
    return {
      chromosomes: new Array(size).fill(0).map(() => {
        return Chromosome.create(shuffle(cities));
      }),
    };
  },

  evolve(population) {
    return population.chromosomes[0];
  },
};
