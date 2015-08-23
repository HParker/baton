var Backbone = require("backbone");
var _ = require("underscore");
module.exports = Backbone.View.extend({
  el: "#channels",

  channelTemplate: _.template("<li><%= name %></li>"),

  channelsTemplate: _.template(
    "<% channels.each(function(channel) { %>" +
      "<%= channelTemplate(channel.toJSON()) %>" +
      "<%  }) %>"),

  initialize: function() {
    _.bindAll(this, "render");
  },

render: function() {
this.$el.html(this.channelsTemplate({
channels: this.collection,
channelTemplate: this.channelTemplate
}));
}
});
