var Backbone = require("backbone");
var Message = require("../models/message.js");
module.exports = Backbone.Collection.extend({
  model: Message
});
