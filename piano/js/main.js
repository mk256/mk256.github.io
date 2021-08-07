"use strict";

let application = new Application();

window.onload = function() {
  application.main();
}

window.onresize = function(event) {
  application.onResize();
}
