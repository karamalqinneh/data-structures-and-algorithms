const BinaryTree = require("../binaryTree");

BinaryTree.prototype.breadthFirstTraversal = function () {
  let queue = [];
  let result = [];
  let node;
  if (!this.root) {
    return null;
  } else {
    queue.push(this.root);
    while (queue.length) {
      node = queue.shift();
      result.push(node.data);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    return result;
  }
};

module.exports = BinaryTree;
