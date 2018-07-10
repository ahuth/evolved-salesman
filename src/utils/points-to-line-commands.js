export default function pointsToLineCommands(points) {
  return points.reduce((acc, point, index) => {
    if (index === 0) {
      return `${acc} M ${point.x} ${point.y}`;
    }

    return `${acc} L ${point.x} ${point.y}`;
  }, '');
}
