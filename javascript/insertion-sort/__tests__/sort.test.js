"use strict";

const insertionSort = require("../sort");

describe("Sort", () => {
  it("sort an array", () => {
    expect(insertionSort([15, 13, 2, 40])).toEqual([2, 13, 15, 40]);
  });
  it("test for an empty array", () => {
    expect(insertionSort([])).toEqual([]);
  });
  it("test for an negative values", () => {
    expect(insertionSort([15, 13, 2, -33])).toEqual([-33, 2, 13, 15]);
  });
});
