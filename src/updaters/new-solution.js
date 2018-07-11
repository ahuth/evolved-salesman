import { shuffle } from 'lodash';

export default function newSolution({ cities }) {
  return {
    path: shuffle(cities),
  };
}
