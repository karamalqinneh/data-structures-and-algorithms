const Node = require("./node");

class BinaryTree {
  constructor() {
    this.root = null;
    this.traverse = [];
  }

  insert(data) {
    let node = new Node(data);
    if (this.root == null) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  insertNode(root, newNode) {
    if (newNode.data < root.data) {
      if (root.left == null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else if (newNode.data > root.data) {
      if (root.right == null) {
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
    if (root != null) {
      this.traverse.push(root.data); // first line - P L R
      this.preorder(root.left); // second line
      this.preorder(root.right); // third line
    }
    return this.traverse;
  }

  inorder(root) {
    if (root != null) {
      this.inorder(root.left); // first line - L P R
      this.traverse.push(root.data); // second line
      this.inorder(root.right); // third line
    }
    return this.traverse;
  }

  postorder(root) {
    if (root != null) {
      this.postorder(root.left); // first line - L R P
      this.postorder(root.right); // second line
      this.traverse.push(root.data); // third line
    }
    return this.traverse;
  }
}

module.exports = BinaryTree;
