const tree_intersection = require("../tree-intersection");
const BinaryTree = require("../../trees/binaryTree.js");

describe("testing tree intersection", () => {
  it("should return an empty array for empty trees", () => {
    const tree1 = new BinaryTree();
    const tree2 = new BinaryTree();
    expect(tree_intersection(tree1, tree2)).toEqual([]);
  });
  it("should return the intersection only", () => {
    const tree1 = new BinaryTree();
    tree1.insert(3);
    tree1.insert(5);
    tree1.insert(1);
    tree1.insert(6);
    tree1.insert(4);
    const tree2 = new BinaryTree();
    tree2.insert(20);
    tree2.insert(-5);
    tree2.insert(1);
    tree2.insert(19);
    tree2.insert(4);
    expect(tree_intersection(tree1, tree2)).toEqual(["1", "4"]);
  });
});
