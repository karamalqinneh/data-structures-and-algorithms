"use strict";

const Vertex = require("./vertex");
const Edge = require("./edge");

class Graph {
  constructor() {
    this.adjacenctList = new Map();
  }

  size() {
    return this.adjacenctList.size;
  }

  addVertex(vertex) {
    this.adjacenctList.set(vertex, []);
    return this.adjacenctList.get(vertex);
  }

  addEdge(start, end, weight) {
    if (!this.adjacenctList.has(start) || !this.adjacenctList.has(end)) {
      console.log("error");
      return;
    }

    const adjacencies = this.getNeighbors(start);
    adjacencies.push(new Edge(end, weight));

    // bi-directional
    const adjacencies2 = this.getNeighbors(end);
    adjacencies2.push(new Edge(start, weight));
  }

  getNeighbors(vertex) {
    if (!this.adjacenctList.has(vertex)) {
      console.log("node does not exist");
      return;
    }
    return this.adjacenctList.get(vertex);
  }

  getNodes(startNode) {
    let queue = [];
    let visitedNodes = new Set();
    let traversal = [];

    queue.push(startNode);
    visitedNodes.add(startNode);

    while (queue.length) {
      const currentNode = queue.shift();
      const neighbors = this.getNeighbors(currentNode);
      traversal.push(currentNode);
      //   console.log({ currentNode });
      //   console.log({ neighbors });
      //   console.log("------------------------------");
      for (let neighbor of neighbors) {
        const neighborNode = neighbor.vertex;
        if (visitedNodes.has(neighborNode)) {
          continue;
        } else {
          visitedNodes.add(neighborNode);
        }
        queue.push(neighborNode);
      }
    }
    return traversal;
  }
}

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

// console.log(myGraph.getNodes(zero));
console.log(myGraph.getNeighbors(two));
