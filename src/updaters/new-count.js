import randomCities from '../utils/random-cities';

export default function newCount(nextCount, { cities, count }) {
  const diff = nextCount - count;

  if (diff < 0) {
    const newLength = cities.length + diff;

    return {
      cities: cities.slice(0, newLength),
      count: nextCount,
    };
  } else {
    const newCities = randomCities(diff);

    return {
      cities: cities.concat(newCities),
      count: nextCount,
    };
  }
}
