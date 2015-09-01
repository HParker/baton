global.window = require("jsdom")
  .jsdom()
  .parentWindow;
global.document = window.document;

describe("log", function() {
});
