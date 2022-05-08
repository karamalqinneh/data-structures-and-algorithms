"use strict";

const quickSort = require("../sort");

describe("Quick Sort", () => {
  it("sort an array", () => {
    expect(quickSort([15, 13, 2, 40])).toEqual([2, 13, 15, 40]);
  });
  it("test for an empty array", () => {
    expect(quickSort([])).toEqual([]);
  });
  it("test for an negative values", () => {
    expect(quickSort([15, 13, 2, -33])).toEqual([-33, 2, 13, 15]);
  });
});
