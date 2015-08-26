var Backbone = require("backbone");
var _ = require("underscore");
var log = require("./log");
var channels = require("./channels");
module.exports = Backbone.View.extend({
  el: "#message-box",

  events: {
    "submit form": "sendMessage"
  },

  initialize: function() {
    _.bindAll(this, "render", "sendMessage");

  },

  render: function() {},

  sendMessage: function(e) {
    e.preventDefault();
    var message = this.$("#message-text").val();
    if (message.length > 0) {
      this.collection.add({from: "Adam", message: message });
      this.$("#message-text").val("");
    }
  }
});
