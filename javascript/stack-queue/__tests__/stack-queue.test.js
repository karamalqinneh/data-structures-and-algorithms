"use strict";

// Stack >> LIFO/FILO
const Stack = require("../stack.js");
const Queue = require("../queue.js");

describe("testing the stack", () => {
  it("test creaing a Stack", () => {
    let newStack = new Stack();
    expect(newStack instanceof Stack).toBeTruthy();
    expect(newStack.peek()).toBeNull();
  });

  it("testing push to the stack", () => {
    let newStack = new Stack();
    newStack.pushItem(1);
    expect(newStack.top).toEqual(1);
    newStack.pushItem(2);
    expect(newStack.top).toEqual(2);
  });

  it("testing pop from the stack", () => {
    let newStack = new Stack();
    newStack.pushItem(1);
    newStack.pushItem(2);
    newStack.pushItem(3);
    expect(newStack.popItem()).toEqual(3);
  });
  it("Can successfully empty a stack after multiple pops", () => {
    let newStack = new Stack();
    newStack.pushItem(1);
    newStack.pushItem(2);
    newStack.pushItem(3);
    newStack.popItem();
    newStack.popItem();
    newStack.popItem();
    expect(newStack.storage.head.value).toEqual(null);
  });
});

describe("testing the queue", () => {
  it("test creaing a queue", () => {
    let newQueue = new Queue();
    expect(newQueue instanceof Queue).toBeTruthy();
    expect(newQueue.peek()).toEqual(null);
  });

  it("testing enqueue to the queue", () => {
    let newQueue = new Queue();
    newQueue.enqueue(1);
    expect(newQueue.peek()).toEqual(1);
    newQueue.enqueue(2);
    expect(newQueue.peek()).toEqual(1);
  });

  it("testing pop from the queue", () => {
    let newQueue = new Queue();
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    newQueue.enqueue(3);
    expect(newQueue.dequeue()).toEqual(1);
    expect(newQueue.dequeue()).toEqual(2);
    expect(newQueue.dequeue()).toEqual(3);
  });
});
