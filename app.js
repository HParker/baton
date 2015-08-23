var app = {};
app.Message  = require("./src/models/message");
app.Channel  = require("./src/models/channel");
app.Messages = require("./src/collections/messages");
app.Channels = require("./src/collections/channels");

app.Log     = require("./src/views/log");
app.Main     = require("./src/views/main");

var irc = require("irc");
var client = new irc.Client("0.0.0.0", "Adam", { channels: ['#hi'] });

var mes = new app.Message({message: "hi"})

var messages = new app.Messages([mes]);

var chan = new app.Channel({ name: "#hi", messages: messages, irc: client });

var channels = new app.Channels([chan]);

var main = new app.Main({ collection: channels });
main.render();

// var log = new app.Log({ collection: messages });
// log.render();

/*
  var log = document.getElementById("messages");
  var nav = document.getElementById("navigation");
  var chan = document.getElementById("channels");
  var people = document.getElementById("people");
  var channels = ["#hi"];
  var currentChannel = channels[0];
  var nick = "joe";


  var client = new irc.Client('0.0.0.0', nick, {
  channels: channels,
  });

  client.addListener('error', function(message) {
  console.log('error: ', message);
  });

  client.addListener('message#', function (from, to, message) {
  var m = Message.extend(message, from);
  log.innerHTML = log.innerHTML + m.show();
  });

  client.addListener('join', function (channel, nick, message) {
  var m = Message.extend(message, "hey")
  chan.innerHTML = chan.innerHTML + m.show();
  });

  client.addListener("names", function (channel, name) {
  people.innerHTML = people.innerHTML + Object.keys(name);
  });


  document.getElementById("send").onclick = function() {
  var text = document.getElementById("message-box").value;
  var m = Message.extend(text, nick);
  client.say("#hi", text);
  log.innerHTML = log.innerHTML + m.show();
  };
*/
