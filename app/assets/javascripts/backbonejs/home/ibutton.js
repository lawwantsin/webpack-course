const Backbone = require("backbone")
const $ = require("jquery")

var iButton = Backbone.View.extend({
  initialize: function() {},

  events: {
    mousedown: "buttonDown",
    mouseup: "buttonUp",
    mouseleave: "buttonUp"
  },

  buttonUp: function() {
    this.$el.removeClass("pressed")
  },

  buttonDown: function() {
    this.$el.addClass("pressed")
  }
})
var bb_button = new iButton({ el: ".logo-bb" })
var canjs_button = new iButton({ el: ".logo-canjs" })
var test_button = new iButton({ el: ".logo-test" })
