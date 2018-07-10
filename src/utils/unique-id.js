let counter = 0;

export default function uniqueId() {
  counter++; // eslint-disable-line no-plusplus
  return `$tsp$${counter}`;
}
