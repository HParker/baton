var Backbone = require("backbone");
var _ = require("underscore")
var Messages = require("../collections/messages.js");
module.exports = Backbone.Model.extend({
  defaults: {
    name: "unknown channel",
    user: "Adam",
    active: false
  },

  initialize: function(options) {
    _.bindAll(this, "sendMessage", "addMessage", "joinChannel");
    this.irc = options.irc;
    this.irc.addListener('registered', this.joinChannel);
    this.set("messages", new Messages());
  },

  addMessage: function(from, message) {
    this.get("messages").add({ from: from, to: this.get("name"), message: message });
  },

  sendMessage: function(message) {
    if (message.get("from") === this.get("user") && message.get("to") === this.get("name")) {
      this.irc.say(this.get("name"), message.get("message"));
    }
  },

  joinChannel: function() {
    this.irc.join(this.get("name"));
    this.irc.addListener("message" + this.get("name"), this.addMessage);
    this.listenTo(this.get("messages"), 'add', this.sendMessage)
  }
});
