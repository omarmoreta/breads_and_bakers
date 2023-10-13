const request = require("supertest");
const app = require("./index");

describe("Test the root path", () => {
  test("GET '/' should return 200 OK status", async () => {
    return request(app).get("/").expect(200);
  });
});

describe("Test the breads controller index path", () => {
  test("GET '/breads' should return 200 OK status", async () => {
    return request(app).get("/breads").expect(200);
  });
});

describe("Test the breads show path", () => {
  test("GET '/breads/[arrayIndex]' should return 200 OK status", async () => {
    return request(app).get("/breads/0").expect(200);
  });
});
