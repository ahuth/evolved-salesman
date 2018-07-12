import _ from 'lodash';
import * as Chromosome from '../utils/chromosome';

export default function newRandomSolution({ bestCost = Infinity, cities }) {
  const solution = Chromosome.create(_.shuffle(cities));
  const cost = Math.round(solution.cost);

  return {
    bestCost: Math.min(bestCost, cost),
    currentCost: cost,
    path: solution.path,
  };
}
