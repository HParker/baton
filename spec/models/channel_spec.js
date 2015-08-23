describe("channel", function() {
  var Channel = require("../../src/models/channel.js");
  var channel;

  beforeEach(function() {
    channel = new Channel({ name: "#atom-shell" });
  });

  it("has a name", function() {
    expect(channel.get("name")).toEqual("#atom-shell");
  });

  it("has a default empty set of messages", function() {
    expect(channel.get("messages").models).toEqual([]);
  });

  describe("active", function() {
    it("is inactive by default", function() {
      expect(channel.get("active")).toEqual(false)
    });

    it("can be marked active", function() {
      channel.set("active", true)
      expect(channel.get("active")).toEqual(true)
    });
  });
});
