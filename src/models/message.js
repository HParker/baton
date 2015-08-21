var Backbone = require("backbone");
exports.message = Backbone.Model.extend({
  defaults: { from: "unknown", to: "unknown", message: "unknown" }
});
