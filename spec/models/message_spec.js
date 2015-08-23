describe("message", function() {
  var Message = require("../../src/models/message.js");

  it("can reference message", function() {
    var message = new Message({ from: "joe", message: "hi there", to: "me" });
    expect(message.get("from")).toEqual("joe");
    expect(message.get("to")).toEqual("me");
    expect(message.get("message")).toEqual("hi there");
  });
});
