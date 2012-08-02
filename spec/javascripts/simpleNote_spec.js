describe("SimpleNote", function() {
  beforeEach(function() {
  });

  it("should start with note title focused", function() {
    expect($("#note-header input")).toHaveAttr("autofocus");
  });
});
