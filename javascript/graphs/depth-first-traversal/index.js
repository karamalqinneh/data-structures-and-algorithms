const Graph = require("../graph");

Graph.prototype.depthFirst = function (startNode) {
  if (!startNode) return null;
  let stack = [];
  let visitedNodes = new Set();

  stack.push(startNode);
  visitedNodes.add(startNode);

  let result = [startNode.value];
  while (stack.length) {
    const currentNode = stack.pop();
    const neighbors = this.getNeighbors(currentNode);
    for (let neighbor of neighbors) {
      const neighborNode = neighbor.vertex;
      if (visitedNodes.has(neighborNode)) {
        continue;
      } else {
        result.push(neighborNode.value);
        visitedNodes.add(neighborNode);
      }
      stack.push(neighborNode);
    }
  }
  return result;
};

module.exports = Graph;
