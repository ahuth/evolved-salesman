export default function pointsToLineCommands(points) {
  const commands = points.map((point, index) => {
    let command;

    if (index === 0) {
      // For the first point, just move the "cursor" to its position.
      command = 'M';
    } else {
      // For subsequent points, draw a line from the current position to a new position.
      command = 'L';
    }

    return `${command} ${point.x} ${point.y}`;
  });

  return commands.join(' ');
}
