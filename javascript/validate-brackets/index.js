/* eslint-disable indent */
"use strict";

const Queue = require("../stack-queue/queue");

function validateBrackets(str) {
  if (str == "") return true;
  let roundBrakets = new Queue();
  let squareBrakets = new Queue();
  let curlyBrakets = new Queue();
  let brackets = ["{", "}", "[", "]", "(", ")"];

  brackets.forEach((ele, index) => {
    const regex = new RegExp(`\\${ele}`, "g");
    str.match(regex);
    switch (index) {
      case 0:
      case 1:
        curlyBrakets.enqueue(str.match(regex).length);
        break;
      case 2:
      case 3:
        squareBrakets.enqueue(str.match(regex).length);
        break;
      case 4:
      case 5:
        roundBrakets.enqueue(str.match(regex).length);
        break;
    }
  });
  let roundValue =
    roundBrakets.storage.head.value == roundBrakets.storage.head.next.value
      ? true
      : false;

  let squareValue =
    squareBrakets.storage.head.value == squareBrakets.storage.head.next.value
      ? true
      : false;

  let curlyValue =
    curlyBrakets.storage.head.value == curlyBrakets.storage.head.next.value
      ? true
      : false;

  return roundValue && squareValue && curlyValue ? true : false;
}

module.exports = validateBrackets;
