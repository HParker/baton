var Backbone = require("backbone");
module.exports = Backbone.Model.extend({
  defaults: { from: "unknown", to: "unknown", message: "unknown" }
});
