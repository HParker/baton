var Backbone = require("backbone");
module.exports = Backbone.Model.extend({
  defaults: {
    server: "localhost",
    nick: "HParker",
    password: null,
    userName: 'hparker',
    realName: 'Adam'
  }
});
