const app = require("../app"),
  chai = require("chai"),
  request = require("supertest");
const { expect } = require("chai");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

describe("API Integration Tests", function () {
  describe("#GET / /api/v1/", function () {
    it("Testing Endpoint", function (done) {
      request(app)
        .post("/api/v1")
        .end(function (err, res) {
          chai.expect(res.statusCode).to.equal(200);
          done();
        });
    });
    it("Test receive same message", function (done) {
        const testJSON = { message: "Hello ToolBox"};
      request(app)
        .post("/api/v1")
        .set('Accept', 'application/json')
        .send(testJSON)
        .end(function (err, res) {
          expect(res.statusCode).to.equal(200);
          expect(res.body.message).to.equal(testJSON.message);
          done();
        });
    });
  });
});
