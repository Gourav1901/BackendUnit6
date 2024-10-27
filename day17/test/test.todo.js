const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app"); // Import the Express app

chai.use(chaiHttp);
const { expect } = chai;

describe("TODO API", () => {
  it("should create a new TODO item", (done) => {
    chai.request(app)
      .post("/api/todos")
      .send({ title: "Test TODO", description: "This is a test TODO" })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.have.property("title", "Test TODO");
        done();
      });
  });

  it("should fetch all TODO items", (done) => {
    chai.request(app)
      .get("/api/todos")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("array");
        done();
      });
  });

  it("should update a TODO item", (done) => {
    const todoId = "some-id"; // replace with valid ID in a real test
    chai.request(app)
      .put(`/api/todos/${todoId}`)
      .send({ title: "Updated Title" })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property("title", "Updated Title");
        done();
      });
  });

  it("should delete a TODO item", (done) => {
    const todoId = "some-id"; // replace with valid ID in a real test
    chai.request(app)
      .delete(`/api/todos/${todoId}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});
