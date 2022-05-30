const Graph = require("../graph");

Graph.prototype.breadthFirst = function (startNode) {
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
};

module.exports = Graph;
