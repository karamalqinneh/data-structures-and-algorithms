"use strict";

const Stack = require("./stack");

class PsuedoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
    this.size = this.stack1.storage.size;
  }

  enqueue(item) {
    let current = this.stack1.head;
    while (current !== null) {
      this.stack2.pushItem(this.stack1.popItem());
      current = current.next;
    }
    this.stack2.pushItem(item);
    current = this.stack2.head;
    while (current !== null) {
      this.stack1.pushItem(this.stack2.popItem());
      current = current.next;
    }
  }

  dequeue() {
    if (this.size === 0) {
      return "queue is empty";
    } else {
      let headValue = this.stack1.storage.head;
      this.stack1.storaga.head = headValue.next;
      return headValue.value;
    }
  }
  peek() {
    if (this.stack1.storage.head) {
      return this.stack1.storage.head.value;
    } else {
      return null;
    }
  }
}

module.exports = PsuedoQueue;
