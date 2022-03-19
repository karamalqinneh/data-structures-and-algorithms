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
    if (this.storage.head === null) {
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
    let poppedValue = secondToLastNode.next;
    secondToLastNode.next = null;
    return poppedValue;
  }

  isEmpty() {
    return this.storage.head === null;
  }
}

module.exports = Stack;
