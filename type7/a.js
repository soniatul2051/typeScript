"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 0] = "up";
    Direction[Direction["down"] = 1] = "down";
    Direction[Direction["left"] = 2] = "left";
    Direction[Direction["right"] = 3] = "right";
})(Direction || (Direction = {}));
function doSomting(passKey) {
    if (passKey == Direction.up) {
        console.log("up");
    }
}
doSomting(Direction.up);
