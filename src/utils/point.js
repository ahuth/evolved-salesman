import uniqueId from './unique-id';

export default class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.id = uniqueId();
  }

  distanceFrom(other) {
    const deltaX = this.position.x - other.position.x;
    const deltaY = this.position.y - other.position.y;
    return Math.hypot(deltaX, deltaY);
  }
}
