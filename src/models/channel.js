var Backbone = require("backbone");
var _ = require("underscore")
var Messages = require("../collections/messages.js");
module.exports = Backbone.Model.extend({
  defaults: {
    name: "unknown channel",
    active: false,
    messages: new Messages()
  },

  initialize: function(options) {
    this.irc = options.irc;
    console.log("adding listener on message" + this.get("name"));
    console.log(this.get("messages"));
    this.irc.addListener("message" + this.get("name"), _.bind(function(from, message) {
      console.log(this.get("messages"));
      this.get("messages").add({ from: from, to: this.get("name"), message: message });
    }, this));
  }
  });
