var Routes = Backbone.Router.extend({
  routes : {
    "*actions" : 'routePanels'
  }

});

var router = new Routes;

router.on('route:routePanels', function(action) {
  body.loadPanel(action);
  navigation.moveIndicator(action);
});

Backbone.history.start();