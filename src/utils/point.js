import uniqueId from './unique-id';

export function create(x, y) {
  return { x, y, id: uniqueId() };
}

export function distance(a, b) {
  const deltaX = a.x - b.x;
  const deltaY = a.y - b.y;
  return Math.hypot(deltaX, deltaY);
}
