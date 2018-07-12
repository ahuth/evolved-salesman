import _ from 'lodash';
import * as Chromosome from '../utils/chromosome';

export default function newRandomSolution({ cities }) {
  const solution = Chromosome.create(_.shuffle(cities));

  return {
    cost: Math.round(solution.cost),
    path: solution.path,
  };
}
