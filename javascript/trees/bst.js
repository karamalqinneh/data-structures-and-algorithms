const BinaryTree = require("./binaryTree");
const Node = require("./node");

class BinarySearchTree extends BinaryTree {
  constructor(root) {
    super(root);
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

  contains(value) {
    return this.preorder(root).indexOf(value) != -1;
  }
}

const bst = new BinarySearchTree();

bst.insert(3);
bst.insert(5);
bst.insert(1);
bst.insert(6);
bst.insert(4);

const root = bst.getRootNode();

console.log("Preorder");
console.log(bst.postorder(root));
console.log(bst.contains(4));
console.log(bst.contains("test"));

module.exports = BinarySearchTree;
