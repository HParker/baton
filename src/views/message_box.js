var Backbone = require("backbone");
var _ = require("underscore");
var log = require("./log");
module.exports = Backbone.View.extend({
  el: "#message-box",

  events: {
    "submit form": "sendMessage"
  },

  initialize: function(opts) {
    _.bindAll(this, "render", "sendMessage");
    this.irc = opts.irc;
  },

  render: function() {},

  sendMessage: function(e) {
    e.preventDefault();
    var message = this.$("#message-text").val();

    if (message.length > 0) { // todo: replace with model validation?
      this.collection.active().get("messages").add({
        from: "Adam",
        to: this.collection.active().get("name"),
        message: message
      });
      this.$("#message-text").val("");
    }
  }
});
