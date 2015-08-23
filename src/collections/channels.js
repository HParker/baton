var Backbone = require("backbone");
var _ = require("underscore");
var Channel = require("../models/channel");

module.exports = Backbone.Collection.extend({
  initialize: function() {
    _.bindAll(this, "allNames", "active");
  },

  model: Channel,

  active: function() {
    return this.findWhere({ active: true}) || this.first();
  },

  allNames: function() {
    return this.map(function(channel) {
      return channel.get("name");
    });
  }
});
