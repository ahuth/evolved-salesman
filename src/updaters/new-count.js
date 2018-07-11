import randomCities from '../utils/random-cities';

export default function newCount(nextCount, { cities, count }) {
  const diff = nextCount - count;

  if (diff < 0) {
    const newLength = cities.length + diff;

    return {
      cities: cities.slice(0, newLength),
      cost: undefined,
      count: nextCount,
      path: undefined,
    };
  } else {
    const newCities = randomCities(diff);

    return {
      cities: cities.concat(newCities),
      cost: undefined,
      count: nextCount,
      path: undefined,
    };
  }
}
