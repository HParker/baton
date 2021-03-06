var app = require("./src/application.js");
var irc = require("irc");

// todo: client will likely move down into channels when we support multiple hosts.
var host = new app.Host({
  host: "thisisadam.me",
  user: "Adam",
  channelNames: ["#hi"]
});

var main = new app.Main({ model: host });
main.render();

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
