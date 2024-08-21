enum Direction {
  up,
  down,
  left,
  right,
}


function doSomting(passKey: Direction) {
    if(passKey == Direction.up) {
        console.log("up");
    }
  }

  doSomting(Direction.up);
