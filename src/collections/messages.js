var Backbone = require("backbone");
var _ = require("underscore");
var Message = require("../models/message.js");
module.exports = Backbone.Collection.extend({
  model: Message
});
