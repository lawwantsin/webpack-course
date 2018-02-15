var Navigation = can.Control({
    init : function() {
      this.indicator = this.element.find('.indicator');
      this.first_nav = this.element.find('.nav:first');
    },

    ':id route' : function(data) {
      this.moveIndicator(data.id);
    },

    nav : function(id) {
      var nav = this.element.find("[href*="+id+']')
      return (nav.length == 1) ? nav : this.first_nav
    },

    moveIndicator : function(id) {
      var el = this.nav(id);
      var t = el.position().top;
      this.indicator.animate({top: t}, 200);
    }
  }
);
var navigation = new Navigation('.navigation');