const Graph = require("../graph");

Graph.prototype.deapthFirst = function (node) {
  let output = [];
  let s = [];
  let explored = new Set();
  s.push(node);

  // Mark the first node as explored
  explored.add(node);

  // We'll continue till our Stack gets empty
  while (s.length) {
    let t = s.pop();

    // Log every element that comes out of the Stack
    output.push(t);

    // 1. In the edges object, we search for nodes this node is directly connected to.
    // 2. We filter out the nodes that have already been explored.
    // 3. Then we mark each unexplored node as explored and push it to the Stack.
    this.getNeighbors(t)
      .filter((n) => !explored.has(n))
      .forEach((n) => {
        explored.add(n);
        s.push(n);
      });
  }
  return output;
};

module.exports = Graph;
