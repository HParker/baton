var Backbone = require("backbone");
var _ = require("underscore")
module.exports = Backbone.View.extend({
  el: "#log",

  messageTemplate: _.template("<li><strong><%= from %></strong> <%= message %></li>"),

  logTemplate: _.template(
    "<ul><% messages.each(function(message) { %>" +
      "<%= messageTemplate(message.toJSON()) %>" +
      "<%  }) %>" +
      "</ul>"),

  initialize: function() {
    _.bindAll(this, "render");
    this.listenTo(this.collection, 'add', this.render);
  },

  render: function() {
    this.$el.html(this.logTemplate({ messages: this.collection, messageTemplate: this.messageTemplate }));
  }
});
