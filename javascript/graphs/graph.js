"use strict";

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
    if (!startNode) return null;
    let queue = [];
    let visitedNodes = new Set();
    let traversal = [];

    if (startNode === null) return null;
    queue.push(startNode);
    visitedNodes.add(startNode);

    while (queue.length) {
      const currentNode = queue.shift();
      const neighbors = this.getNeighbors(currentNode);
      traversal.push(currentNode.value);
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

module.exports = Graph;
