const Node = require("./node");

class BinaryTree {
  constructor() {
    this.root = null;
    this.traverse = [];
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

  getRootNode() {
    return this.root;
  }

  preorder(root) {
    if (root !== null) {
      this.traverse.push(root.data);
      this.preorder(root.left);
      this.preorder(root.right);
    }
    return this.traverse;
  }

  inorder(root) {
    if (root !== null) {
      this.inorder(root.left);
      this.traverse.push(root.data);
      this.inorder(root.right);
    }
    return this.traverse;
  }

  postorder(root) {
    if (root !== null) {
      this.postorder(root.left);
      this.postorder(root.right);
      this.traverse.push(root.data);
    }
    return this.traverse;
  }
}

module.exports = BinaryTree;
