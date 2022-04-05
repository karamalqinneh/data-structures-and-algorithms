"use strict";

const BinaryTree = require("../index");

describe("testing the breadth first traversal method", () => {
  it("testing empty tree", () => {
    const bst = new BinaryTree();
    expect(bst.breadthFirstTraversal()).toEqual(null);
  });
  it("testing the breadth first traversal method", () => {
    const bst = new BinaryTree();
    bst.insert(3);
    bst.insert(5);
    bst.insert(-5);
    bst.insert(12);
    bst.insert(4);
    expect(`${bst.breadthFirstTraversal()}`).toEqual(`3,-5,5,4,12`);
  });
});
