describe("messages", function() {
  var Messages = require("../../src/collections/messages.js");

  it("is a collection of messages", function() {
    var messages = new Messages([{ from: "myfriend", message: "how you doin'" }]);
    expect(messages.first().get("from")).toEqual("myfriend");
  });
});
