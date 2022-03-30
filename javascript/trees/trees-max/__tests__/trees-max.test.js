"use strict";

// Require our linked list implementation
const BinaryTree = require("../index");

describe("testing the binary search tree max value method", () => {
  it("testing empty tree", () => {
    const bst = new BinaryTree();
    expect(bst.findMax()).toEqual(null);
  });
  it("Can successfully return the maximum value", () => {
    const bst = new BinaryTree();
    bst.insert(3);
    bst.insert(5);
    bst.insert(-5);
    bst.insert(12);
    bst.insert(4);
    expect(bst.findMax()).toEqual(12);
  });
});
