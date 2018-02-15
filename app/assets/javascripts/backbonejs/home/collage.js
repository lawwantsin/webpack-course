var Collage = Backbone.View.extend({

  initialize : function() { var c = this;
    var el = $(this.$el);
    this.moveHeight = el.height();
    this.logos = el.find('a');
  },

  events : {
    'mouseenter a' : function(e) {this.mouseE(e.target)},
    'mouseleave a' : function(e) {this.mouseL(e.target)}
  },

  'mouseE' : function(el , ev) {
    var y2 = $(el).data('y2');
    $(el).animate({'background-position-y': y2}, 0);
  },

  mouseL :function(el, ev) {
    var y1 = $(el).data('y1');
    $(el).animate({'background-position-y': y1}, 0);
  }

});
var collage1 = new Collage({el: '.webography  .collage'});
var collage2 = new Collage({el: '.preferred_apis .collage'});