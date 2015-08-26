var Backbone = require("backbone");
var _ = require("underscore");
var log = require("./log");
var channels = require("./channels");
var messageBox = require("./message_box.js");
module.exports = Backbone.View.extend({
  el: "#wrapper",

  initialize: function() {
    _.bindAll(this, "render");
    this.log = new log({ collection: this.collection.active().get("messages") });
    this.channels = new channels({ collection: this.collection });
    this.messageBox = new messageBox({ collection: this.collection.active().get("messages") });
  },

  render: function() {
    this.log.render();
    this.channels.render();
  }
});
