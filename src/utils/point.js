import uniqueId from './unique-id';

export default {
  create(x, y) {
    return { x, y, id: uniqueId() };
  },

  distance(a, b) {
    const deltaX = a.x - b.position.x;
    const deltaY = a.y - b.position.y;
    return Math.hypot(deltaX, deltaY);
  },
};
