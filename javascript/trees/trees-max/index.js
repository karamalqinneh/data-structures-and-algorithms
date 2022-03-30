const BinaryTree = require("../binaryTree");

BinaryTree.prototype.findMax = function () {
  if (`${this.preorder(this.root)}` == "") {
    return null;
  } else {
    let max = this.preorder(this.root).reduce((ele, acc) => Math.max(ele, acc));
    return max;
  }
};

module.exports = BinaryTree;
