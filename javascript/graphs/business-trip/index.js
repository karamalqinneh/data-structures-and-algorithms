const Graph = require("../graph");

Graph.prototype.businessTrip = function (arr) {
  let cost = 0;
  if (this.getNeighbors(arr[0]) === null || !arr[0]) return null;
  let neighbors;
  for (let i = 0; i <= arr.length - 2; i++) {
    neighbors = this.getNeighbors(arr[i]);
    let node = neighbors.map((ele) => ele.vertex).indexOf(arr[i + 1]);
    console.log(node);
    if (node >= 0) {
      cost += neighbors[node].weight;
    } else {
      return null;
    }
  }
  return cost;
};

module.exports = Graph;
