import randomCities from '../utils/random-cities';

export default function newCities({ count }) {
  return {
    bestCost: undefined,
    cities: randomCities(Number(count)),
    currentCost: undefined,
    path: undefined,
  };
}
