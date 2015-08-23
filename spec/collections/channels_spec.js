describe("channels", function() {
  var Channels = require("../../src/collections/channels.js");
  var channels;

  beforeEach(function() {
    channels = new Channels([{ name: "#ruby" }, { name: "#atom-shell" }])
  });

  it("is a collection of channels", function() {
    var channels = new Channels();
    expect(channels.length).toEqual(0);
  });

  describe("active", function() {
    it("will return the active channel", function() {
      channels.findWhere({ name: "#atom-shell"}).set("active", true);
      expect(channels.active().get("name")).toEqual("#atom-shell")
    });

    it("will return the first if no channel is active", function() {
      expect(channels.active().get("name")).toEqual("#ruby")
    });
  });

  describe("allNames", function() {
    it("returns the names of all the channels", function() {
      expect(channels.allNames()).toEqual(["#ruby", "#atom-shell"]);
    });
  });
});
