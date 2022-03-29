const BinaryTree = require("./binaryTree");
const Node = require("./node");

class BinarySearchTree extends BinaryTree {
  constructor(root) {
    super(root);
  }

  insert(data) {
    let node = new Node(data);
    if (this.root === null) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  insertNode(root, newNode) {
    if (newNode.data < root.data) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else if (newNode.data > root.data) {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  contains(value) {
    return this.preorder(this.root).indexOf(value) !== -1;
  }
}

module.exports = BinarySearchTree;
