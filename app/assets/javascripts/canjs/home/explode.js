var Explosion = can.Control({
    pluginName : 'explosion'
  }
  , {

  init : function(el) {
    this.bomb = el.find('.bomb');
    this.logos = el.find('a');
    this.blown = false;
    this.moveHeight = el.find('.collage').height();
  },

  setFuse : function() { var c = this;
    if (!c.blown) {
      var bt = this.bomb.height()/2 - 50
      var bl = this.bomb.width()/2 - 50
      c.logos.each(function(i,e) {
        $e = $(e);
        var l = $e.position().left;
        var t = $e.position().top;
        $e.data('top', t);
        $e.data('left', l);
        var y = $e.css('background-position-y').replace('px', '');
        $e.data('y1', y);
        $e.data('y2', (y-c.moveHeight));
        $e.animate({top: bt, left: bl}, 0);
      });
      setTimeout(function() {
        c.blowTheHellUp();
      }, 1000);
    }
  },

  blowTheHellUp : function() {
    this.bomb.hide();
    this.logos.each(function(i,e) {
      $e = $(e);
      $e.animate({top: $e.data('top'), left: $e.data('left')}, 1000, 'easeOutElastic');
    });
    this.blown = true;
  }

});

var pa_expl = new Explosion('.preferred_apis');
var web_expl = new Explosion('.webography');
