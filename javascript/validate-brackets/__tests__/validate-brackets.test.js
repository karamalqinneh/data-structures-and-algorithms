"use strict";

const validateBrackets = require("../index");

describe("testing the validate brackets", () => {
  it("testing true", () => {
    let test = "((((const x = test;)))){test}{df}{}[][]";
    expect(validateBrackets(test)).toEqual(true);
  });
  it("testing false", () => {
    let test = "((((const x = test;)){test}{df}}[[]";
    expect(validateBrackets(test)).toEqual(false);
  });
  it("testing empty", () => {
    let test = "";
    expect(validateBrackets(test)).toEqual(true);
  });
});
