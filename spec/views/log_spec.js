describe("log", function() {
  var Log = require("../../src/views/log.js");
    it("renders message if no messages to display", function() {
      global.window = require("jsdom")
        .jsdom()
        .parentWindow;
      global.document = window.document;
      var log = new Log();
      //log.render();
    });
});
