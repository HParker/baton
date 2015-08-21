var Backbone = require("backbone");
exports.log = Backbone.View.extend({
  el: "#log",

  initialize: function() {
    this.$el.html("hi there")
  }
})
