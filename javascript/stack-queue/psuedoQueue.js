"use strict";

const Stack = require("./stack");

class PsuedoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
    this.storage = null;
    this.top = null;
  }

  enqueue(item) {
    this.storage.append(item);
  }

  dequeue() {
    let headValue = this.storage.head;
    this.storage.head = headValue.next;
    return headValue.value;
  }

  peek() {
    if (this.storage.head) {
      return this.storage.head.value;
    } else {
      return null;
    }
  }
  isEmpty() {
    return this.storage.head === null;
  }
}

module.exports = PsuedoQueue;
