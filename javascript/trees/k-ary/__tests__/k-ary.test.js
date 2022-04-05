"use strict";

const KaryNode = require("../index");

describe("testing the breadth first traversal method", () => {
  it("testing the breadth first traversal method", () => {
    const rootTree = new KaryNode(5);
    const node = new KaryNode(3);
    const node2 = new KaryNode(15);
    const node4 = new KaryNode(9);
    const node5 = new KaryNode(13);
    const node6 = new KaryNode(12);
    const node7 = new KaryNode(22);

    rootTree.appendChild(node);
    rootTree.appendChild(node2);
    rootTree.appendChild(node4);
    node2.appendChild(node5);
    node2.appendChild(node6);
    node2.appendChild(node6);
    node6.appendChild(node7);
    node6.appendChild(node7);
    expect(`${rootTree.fizzBuzz()}`).toEqual(
      `Buzz Fizz FizzBuzz Fizz 13 Fizz 22`
    );
  });
});
