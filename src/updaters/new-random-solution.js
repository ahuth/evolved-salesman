import { shuffle } from 'lodash';
import * as Chromosome from '../utils/chromosome';

export default function newRandomSolution({ cities }) {
  const solution = Chromosome.create(shuffle(cities));

  return {
    cost: Math.round(solution.cost),
    path: solution.path,
  };
}
