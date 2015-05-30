var five = require("johnny-five");
var board = new five.Board(); // define the port if not found

board.on("ready", function() {
  var array = new five.Leds([3, 5, 6]);

  array.blink(500);
});

// OTHER THINGS TO TRY
//   - assign various behaviors to individual leds in the array