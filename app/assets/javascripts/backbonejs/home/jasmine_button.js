var jasmineRunner = Backbone.View.extend({

  initialize : function() {
  },

  events : {
    'click .button' : 'run',
  },

  run : function() {
    execJasmine();
  }

});
var runner = new jasmineRunner({el:'.jasmine-runner'});
