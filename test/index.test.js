const { describe, it } = require("node:test");
const assert = require("node:assert");
const { greet, add, multiply } = require("../src/index");

describe("Hello World Tests", () => {
  describe("greet()", () => {
    it("default returns Hello, World!", () => {
      assert.strictEqual(greet(), "Hello, World!");
    });
    it("greets GitHub Actions", () => {
      assert.strictEqual(greet("GitHub Actions"), "Hello, GitHub Actions!");
    });
    it("greets a user", () => {
      assert.strictEqual(greet("An"), "Hello, An!");
    });
  });
  describe("add()", () => {
    it("1 + 2 = 3", () => {
      assert.strictEqual(add(1, 2), 3);
    });
    it("handles negative numbers", () => {
      assert.strictEqual(add(-1, -5), -6);
    });
  });
  describe("multiply()", () => {
    it("3 x 4 = 12", () => {
      assert.strictEqual(multiply(3, 4), 12);
    });
    it("zero gives zero", () => {
      assert.strictEqual(multiply(0, 100), 0);
    });
  });
});
