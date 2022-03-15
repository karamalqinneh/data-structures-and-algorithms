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
    let linkedList = this.storage;
    linkedList.current = this.storage.head;
    while (linkedList.current !== null) {
      linkedList.current = linkedList.current.next;
    }
    if (linkedList.head === null) {
      linkedList.head = null;
    } else {
      linkedList.head.next = null;
    }
    this.storage = linkedList;
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
