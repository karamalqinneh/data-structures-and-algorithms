"use strict";

const LinkedList = require("./linkedList");

class Queue {
  constructor() {
    this.storage = new LinkedList();
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
}

module.exports = Queue;
