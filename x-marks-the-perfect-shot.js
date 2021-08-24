const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

const finalPosition = function (moves) {
  let xPosition = 0;
  let yPosition = 0;
  for (let move of moves) {
    if (move === 'north') {
      yPosition += 1;
    } else if (move === 'east') {
      xPosition += 1;
    } else if (move === 'south') {
      yPosition -= 1;
    } else if (move === 'west') {
      xPosition -= 1;
    }
  }
  return [xPosition, yPosition];
}

console.log(finalPosition(moves));