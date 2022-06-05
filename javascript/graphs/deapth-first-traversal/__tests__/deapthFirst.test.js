"use strict";

// Require our linked list implementation
const Graph = require("../index");
const Vertex = require("../../vertex");

describe("testing graph deapth first", () => {
  it("A collection of all nodes can be properly retrieved from the graph", () => {
    const myGraph = new Graph();
    const zero = new Vertex(0);
    const one = new Vertex(1);
    const two = new Vertex(2);
    const three = new Vertex(3);
    const four = new Vertex(4);
    const five = new Vertex(5);

    myGraph.addVertex(zero);
    myGraph.addVertex(one);
    myGraph.addVertex(two);
    myGraph.addVertex(three);
    myGraph.addVertex(four);
    myGraph.addVertex(five);

    myGraph.addEdge(zero, two, 5);
    myGraph.addEdge(one, three, 5);
    myGraph.addEdge(two, three, 5);
    myGraph.addEdge(two, four, 5);
    myGraph.addEdge(four, five, 5);
    myGraph.addEdge(five, three, 5);
    expect(myGraph.breadthFirst(zero)).toEqual([0, 2, 3, 4, 1, 5]);
  });
  it("A graph with only one node and edge can be properly returned", () => {
    const graph01 = new Graph();
    const zero = new Vertex(0);
    graph01.addVertex(zero);
    graph01.addEdge(zero, null, 5);
    expect(graph01.breadthFirst(zero)).toEqual([0]);
  });
  it("An empty graph properly returns null", () => {
    const graph01 = new Graph();
    expect(graph01.breadthFirst()).toEqual(null);
  });
});
