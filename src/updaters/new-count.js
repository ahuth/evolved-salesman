import randomCities from '../utils/random-cities';

export default function newCount(nextCount, { cities, count }) {
  const diff = nextCount - count;

  if (diff < 0) {
    const newLength = cities.length + diff;

    return {
      bestCost: undefined,
      cities: cities.slice(0, newLength),
      currentCost: undefined,
      count: nextCount,
      path: undefined,
    };
  } else {
    const newCities = randomCities(diff);

    return {
      bestCost: undefined,
      cities: cities.concat(newCities),
      currentCost: undefined,
      count: nextCount,
      path: undefined,
    };
  }
}
