import randomCities from '../utils/random-cities';

export default function newCities({ count }) {
  return {
    cities: randomCities(Number(count)),
    path: undefined,
  };
}
