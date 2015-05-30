var five  = require('johnny-five');
var board = new five.Board();

board.on('ready', function() {

  this.loop(1500, function() {

  var ledArr = new five.Leds([11,10,9]);

    this.wait(500, function() {
      ledArr[2].off();
      ledArr[0].on();
      
      this.wait(500, function() {
        ledArr[0].off();
        ledArr[1].on();
      
        this.wait(500, function() {
          ledArr[1].off();
          ledArr[2].on();
        });
      });
    });
  });
});
