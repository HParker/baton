var Backbone = require("backbone");
var _ = require("underscore");
module.exports = Backbone.View.extend({
  el: "#log",

  messageTemplate: _.template("<li><strong><%= from %></strong> <%= message %></li>"),

  logTemplate: _.template(
    "<ul><% messages.each(function(message) { %>" +
      "<%= messageTemplate(message.toJSON()) %>" +
      "<%  }) %>" +
      "</ul>"),

  initialize: function() {
    _.bindAll(this, "render", "messages", "listenToActive");
    this.listenToActive();
    this.listenTo(this.collection, "activeChange", this.listenToActive)
  },

  render: function() {
    this.$el.html(this.logTemplate({
      messages: this.messages(),
      messageTemplate: this.messageTemplate
    }));

    this.$el.scrollTop(this.$el[0].scrollHeight);
  },

  listenToActive: function() {
    this.stopListening(this.currentActive);
    this.listenTo(this.messages(), 'add', this.render);
    this.render();
  },

  messages: function() {
    this.currentActive = this.collection.active().get("messages");
    return this.currentActive;
  }
});
