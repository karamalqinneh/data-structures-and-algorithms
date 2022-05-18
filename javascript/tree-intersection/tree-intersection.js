const HashMap = require("../hashmap");

const tree_intersection = (tree1, tree2) => {
  let intersection = [];
  let data1 = tree1.preorder(tree1.getRootNode());
  let data2 = tree2.preorder(tree2.getRootNode());
  let storage1 = new HashMap(10);
  let storage2 = new HashMap(10);
  data1.forEach((ele) => storage1.set(ele, "tree 1"));
  data2.forEach((ele) => storage2.set(ele, "tree 2"));
  let storage1Values = storage1.keys();
  let storage2Values = storage2.keys();
  storage2Values.forEach((ele) => {
    if (storage1Values.indexOf(ele) >= 0) intersection.push(ele);
  });
  return intersection;
};

module.exports = tree_intersection;
