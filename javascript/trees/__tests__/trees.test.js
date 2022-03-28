"use strict";

// Require our linked list implementation
const BinarySearchTree = require("../bst");

describe("testing the binary search tree", () => {
  it("Can successfully instantiate an empty tree", () => {
    const bst = new BinarySearchTree();

    expect(bst).toBeDefined();
    expect(bst.root).toBeNull();
  });
  it("Can successfully instantiate a tree with a single root node", () => {
    const bst = new BinarySearchTree();
    bst.insert(5);
    expect(bst).toBeDefined();
    expect(bst.root.data).toEqual(5);
  });
  it("can successfully add a left child and right child properly to a node", () => {
    const bst = new BinarySearchTree();
    bst.insert(5);
    bst.insert(7);
    bst.insert(3);
    expect(bst).toBeDefined();
    expect(bst.root.data).toEqual(5);
    expect(bst.root.left.data).toEqual(3);
    expect(bst.root.right.data).toEqual(7);
  });
  it("Can successfully return a collection from a preorder traversal", () => {
    const bst = new BinarySearchTree();
    bst.insert(3);
    bst.insert(5);
    bst.insert(1);
    bst.insert(6);
    bst.insert(4);
    const root = bst.getRootNode();
    expect(`${bst.preorder(root)}`).toEqual(`3,1,5,4,6`);
  });
  it("Can successfully return a collection from a inorder traversal", () => {
    const bst = new BinarySearchTree();
    bst.insert(3);
    bst.insert(5);
    bst.insert(1);
    bst.insert(6);
    bst.insert(4);
    const root = bst.getRootNode();
    expect(`${bst.inorder(root)}`).toEqual(`1,3,4,5,6`);
  });
  it("Can successfully return a collection from a postorder traversal", () => {
    const bst = new BinarySearchTree();
    bst.insert(3);
    bst.insert(5);
    bst.insert(1);
    bst.insert(6);
    bst.insert(4);
    const root = bst.getRootNode();
    expect(`${bst.postorder(root)}`).toEqual(`1,4,6,5,3`);
  });
});
