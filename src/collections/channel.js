var Backbone = require("backbone");
var Message = require("../models/message").message;
exports.channel = Backbone.Collection.extend({
  model: Message
});
