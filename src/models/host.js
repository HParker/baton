var Backbone = require("backbone");
var _ = require("underscore");
var irc = require("irc");
var Channel = require("../models/channel");
var Channels = require("../collections/channels");

module.exports = Backbone.Model.extend({
  defaults: {
    host: "irc.freenode.net",
    user: "Adam"
  },

  initialize: function(options) {
    _.bindAll(this, "createChannel")
    this.client = new irc.Client(this.get("host"), this.get("user"));
    var channels = _.map(options.channelNames, this.createChannel);
    this.set("channels", new Channels(channels));
  },

  createChannel: function(name) {
    return new Channel({ name: name, irc: this.client });
  }
});
