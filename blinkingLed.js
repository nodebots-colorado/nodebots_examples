var five = require("johnny-five");
var board = new five.Board({
  port: "/dev/cu.usbmodem1411" // you may need to specify a port if johnny-five can't guess it
});

board.on("ready", function() {
  // Create an Led on pin 13
  var led = new five.Led(13);
  // Blink every half second
  led.blink(500); 
});

// OTHER THINGS TO TRY:
//   - blink at a different interval or just led.blink();
//   - use the strobe() function
//   - use the pulse() function (You'll need to use pin 11)
//   - use fadeIn() and fadeOut(), again with pin 11 or another PWM ~ pin
//