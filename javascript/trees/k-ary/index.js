const KaryNode = require("./node");

KaryNode.prototype.fizzBuzz = function () {
  let queue = [this];
  let result = [];
  let node;
  let prevChildren;

  while (queue.length) {
    node = queue.shift();
    if (prevChildren !== node.children) result.push(node.value);
    prevChildren = node.children;
    if (node.children) {
      node.children.forEach((ele) => queue.push(ele.value));
    }
  }
  let text = "";
  result.forEach((ele) => {
    if (ele % 5 === 0 && ele % 3 === 0) {
      ele = "FizzBuzz";
    } else if (ele % 3 === 0) {
      ele = "Fizz";
    } else if (ele % 5 === 0) {
      ele = "Buzz";
    } else {
      ele = `${ele}`;
    }
    text = text + ele + " ";
  });
  return text.trim();
};

// const fizzBuzzHelper = (ele) => {
//   if (ele % 5 === 0 && ele % 3 === 0) {
//     ele = "FizzBuzz";
//   } else if (ele % 3 === 0) {
//     ele = "Fizz";
//   } else if (ele % 5 === 0) {
//     ele = "Buzz";
//   } else {
//     ele = `${ele}`;
//   }
// };

// const fizzBuzz = (root) => {
//   let queue = [root];
//   let newTree = new KaryNode();
//   let result = [];
//   let node;
//   let prevChildren;

//   while (queue.length) {
//     node = queue.shift();
//     if (prevChildren !== node.children)
//       newTree.value = fizzBuzzHelper(node.value);
//     prevChildren = node.children;
//     if (node.children) {
//       node.children.forEach((ele) => queue.push(ele.value));
//     }
//   }
//   //   let text = "";
//   //   result.forEach((ele) => {
//   //     if (ele % 5 === 0 && ele % 3 === 0) {
//   //       ele = "FizzBuzz";
//   //     } else if (ele % 3 === 0) {
//   //       ele = "Fizz";
//   //     } else if (ele % 5 === 0) {
//   //       ele = "Buzz";
//   //     } else {
//   //       ele = `${ele}`;
//   //     }
//   //     text = text + ele + " ";
//   //   });
//   return node;
// };

// const rootTree = new KaryNode(5);
// const node = new KaryNode(3);
// const node2 = new KaryNode(15);
// const node4 = new KaryNode(9);
// const node5 = new KaryNode(13);
// const node6 = new KaryNode(12);
// const node7 = new KaryNode(22);

// rootTree.appendChild(node);
// rootTree.appendChild(node2);
// rootTree.appendChild(node4);
// node2.appendChild(node5);
// node2.appendChild(node6);
// node2.appendChild(node6);
// node6.appendChild(node7);
// node6.appendChild(node7);

// console.log(fizzBuzz(rootTree));
// // console.log(rootTree.fizzBuzzHelper());

module.exports = KaryNode;
