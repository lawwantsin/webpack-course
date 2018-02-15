var Body = can.Control({

    init : function(el, options) { var c = this;
      c.first_panel = $('.sup:first');
      c.panels = $('.supplimental');
      c.panels.find('.sup').hide();
      c.loading();
    },

    ':id route' : function(data) {
      this.loadPanel(data.id);
    },

    loading : function() {
      var l = $('#loading');
      var p = l.find('p');
      p.hide();
      $('#loading').fadeOut(100);
      this.loadPanel()
    },

    loadPanel : function(id) {
      var p = this.panel(id);
      this.activatePanel(p);
    },

    panel : function(id) {
      var panel = this.panels.find("."+id)
      return (panel.length == 1) ? panel : this.first_panel
    },

    activatePanel : function(activePanel) { var c = this;
      allPanels = c.panels.find('.sup');
      allPanels.stop().hide();
      activePanel.fadeIn(500, function() {
        activePanel.explosion('setFuse');
      });
    }
  }
);
var body = new Body('body');