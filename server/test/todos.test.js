const app = require("../app"),
  chai = require("chai"),
  request = require("supertest");

describe("API Integration Tests", function () {
  describe("#GET / /api/v1/", function () {
    it("Testing Endpoint", function (done) {
      request(app)
        .get("/api/v1")
        .end(function (err, res) {
          chai.expect(res.statusCode).to.equal(200);
          done();
        });
    });
  });
});
