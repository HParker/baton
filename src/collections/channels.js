var Backbone = require("backbone");
var _ = require("underscore");
var Channel = require("../models/channel");

module.exports = Backbone.Collection.extend({
  initialize: function(channels) {
    _.bindAll(this, "allNames", "active", "activate");
    channels[0].set("active", true);
  },

  model: Channel,

  active: function() {
    return this.findWhere({ active: true});
  },

  activate: function(name) {
    var activeChan = this.findWhere({ active: true});
    if (activeChan) { activeChan.set("active", false) };
    this.findWhere({ name: name }).set("active", true);
    this.trigger("activeChange");
  },

  allNames: function() {
    return this.map(function(channel) {
      return channel.get("name");
    });
  }
});
