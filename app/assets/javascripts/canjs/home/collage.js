var Collage = can.Control({

  init : function(el) {
    el.data('moveHeight', el.height()) ;
    console.log(el.height());
    this.logos = this.element.find('a');
  },

  'a mouseenter' : function(el) {this.mouseE(el)},
  'a mouseleave' : function(el) {this.mouseL(el)},

  mouseE : function(el , ev) {
    var y2 = $(el).data('y2');
    $(el).animate({'background-position-y': y2}, 0);
  },

  mouseL :function(el, ev) {
    var y1 = $(el).data('y1');
    $(el).animate({'background-position-y': y1}, 0);
  }

});
var collage = new Collage('.collage');