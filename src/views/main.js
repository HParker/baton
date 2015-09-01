var Backbone = require("backbone");
var _ = require("underscore");
var log = require("./log");
var sidebar = require("./sidebar");
var messageBox = require("./message_box");
module.exports = Backbone.View.extend({
  el: "#wrapper",

  initialize: function() {
    _.bindAll(this, "render");
    this.log = new log({
      collection: this.model.get("channels")
    });

    this.sidebar = new sidebar({
      collection: this.model.get("channels"),
      model: this.model
    });

    this.messageBox = new messageBox({
      collection: this.model.get("channels")
    });
  },

    render: function() {
      this.log.render();
      this.sidebar.render();
    }
  });
