var iButton = can.Control({

  init : function() {

  },

  'mousedown' : function() { this.buttonDown() },
  'mouseup' : function() { this.buttonUp() },
  'mouseleave' : function() {this.buttonUp() },

  buttonUp : function() {
    this.element.removeClass('pressed');
  },

  buttonDown : function() {
    this.element.addClass('pressed');
  }

});
var bb_button = new iButton('.logo-bb');
var canjs_button = new iButton({el:'.logo-canjs'});
