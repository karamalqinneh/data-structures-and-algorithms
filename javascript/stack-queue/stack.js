"use strict";
const LinkedList = require("./linkedList");

class Stack {
  constructor() {
    this.storage = new LinkedList();
    this.top = null;
  }

  pushItem(item) {
    this.storage.append(item);
    this.top = item;
  }

  peek() {
    return this.top;
  }

  popItem() {
    if (this.storage.head.next === null) {
      console.log("test");
      this.storage === null;
      return;
    }
    let currentNode = this.storage.head;
    let secondToLastNode = this.storage.head;
    while (currentNode.next) {
      secondToLastNode = currentNode;
      currentNode = currentNode.next;
    }
    this.storage.size--;
    secondToLastNode.next = null;
  }

  isEmpty() {
    return this.storage.head === null;
  }
}

let newStack = new Stack();
newStack.pushItem(1);
newStack.pushItem(2);
newStack.pushItem(3);
newStack.popItem();
newStack.popItem();
newStack.popItem();

console.log(newStack.storage.toString());

module.exports = Stack;
