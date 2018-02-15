var Body = Backbone.View.extend({

  initialize : function() { var c = this;
    c.first_panel = $('.sup:first');
    c.panels = $('.supplimental');
    c.loading();
  },

  loading : function() {
    var l = $('#loading');
    var p = l.find('p');
    p.hide();
    $('#loading').fadeOut(100);
  },

  loadPanel : function(id) {
    var p = this.panel(id);
    this.activatePanel(p);
  },

  panel : function(id) {
    var panel = $("."+id);
    return (panel.length == 1) ? panel : this.first_panel
  },

  activatePanel : function(el) { var c = this;
    c.panels.find('.sup').hide();
    el.fadeIn(500, function() {
      el.trigger('setFuse');
    });
  }

});
var body = new Body({el: 'body'});
