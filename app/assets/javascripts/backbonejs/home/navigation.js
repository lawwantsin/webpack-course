var Navigation = Backbone.View.extend({

    initialize : function() {
      this.indicator = $('.indicator');
      this.first_nav = $('.nav:first');
    },

    nav : function(id) {
      var nav = this.$el.find("[href*="+id+']')
      return (nav.length == 1) ? nav : this.first_nav
    },

    moveIndicator : function(id) {
      var el = this.nav(id);
      var t = el.position().top
      this.indicator.animate({top: t}, 200);
    }
  }
);
var navigation = new Navigation({el:'.navigation'});