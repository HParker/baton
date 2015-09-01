var app = {};
app.Message  = require("./models/message");
app.Channel  = require("./models/channel");
app.Messages = require("./collections/messages");
app.Channels = require("./collections/channels");
app.Host = require("./models/host.js");
app.Main     = require("./views/main");
module.exports = app;
