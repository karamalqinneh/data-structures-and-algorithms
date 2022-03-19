"use strict";

// Stack >> LIFO/FILO
const PsuedoQueue = require("../psuedoQueue");

describe("testing the queue", () => {
  it("test creaing a queue", () => {
    let newQueue = new PsuedoQueue();
    expect(newQueue instanceof PsuedoQueue).toBeTruthy();
  });

  it("testing enqueue to the queue", () => {
    let newQueue = new PsuedoQueue();
    newQueue.enqueue(1);
    expect(newQueue.peek()).toEqual(1);
    newQueue.enqueue(2);
    expect(newQueue.peek()).toEqual(1);
  });

  it("testing pop from the queue", () => {
    let newQueue = new PsuedoQueue();
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    newQueue.enqueue(3);
    expect(newQueue.dequeue()).toEqual(1);
  });
});
