export default class Point {
  constructor(x, y, id) {
    this.x = x;
    this.y = y;
    this.id = id;
  }

  distanceFrom(other) {
    const deltaX = this.position.x - other.position.x;
    const deltaY = this.position.y - other.position.y;
    return Math.hypot(deltaX, deltaY);
  }
}
