var Backbone = require("backbone");
var _ = require("underscore");
var $ = require("jquery");
var Channel = require("../models/channel");

module.exports = Backbone.View.extend({
  el: "#channels",

  events: {
    "click li.channel": "activateChannel",
    "submit form": "createChannel"
  },

  channelTemplate: _.template("<li class='channel <%= active ? 'active' : '' %>' data-channel='<%= name %>'><%= name %></li>"),

  channelsTemplate: _.template(
    "<% channels.each(function(channel) { %>" +
      "<%= channelTemplate(channel.toJSON()) %>" +
      "<%  }) %>" +
      "<li><form action=''><input type='text' id='new-channel'></input></form></li>"
  ),

  initialize: function() {
    _.bindAll(this, "render", "createChannel", "activateChannel");
    this.listenTo(this.collection, "add", this.render)
  },

  render: function() {
    this.$el.html(this.channelsTemplate({
      channels: this.collection,
      channelTemplate: this.channelTemplate
    }));
  },

  createChannel: function(event) {
    event.preventDefault();
    var channelName = this.$("#new-channel").val();
    var newChannel = this.model.createChannel(channelName);
    newChannel.joinChannel();
    this.collection.add(newChannel);
  },

  activateChannel: function(event) {
    var chanName = $(event.currentTarget).attr("data-channel");
    this.collection.activate(chanName);
    this.render();
  }
});
