import _ from 'lodash';

export function create(x, y) {
  return { x, y, id: _.uniqueId() };
}

export function distance(a, b) {
  const deltaX = a.x - b.x;
  const deltaY = a.y - b.y;
  return Math.hypot(deltaX, deltaY);
}
