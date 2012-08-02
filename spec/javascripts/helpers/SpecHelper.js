beforeEach(function() {
  jasmine.getFixtures().fixturesPath = "public";
  var appBody = $(readFixtures("index.html"));
  setFixtures(appBody);
});
