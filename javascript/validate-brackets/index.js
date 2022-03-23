/* eslint-disable indent */
"use strict";

function validateBrackets(str) {
  let roundBrakets = [];
  let squareBrakets = [];
  let curlyBrakets = [];
  let brackets = ["{", "}", "[", "]", "(", ")"];

  brackets.forEach((ele, index) => {
    const regex = new RegExp(`\\${ele}`, "g");
    str.match(regex);
    switch (index) {
      case 0:
      case 1:
        curlyBrakets.push(str.match(regex).length);
        break;
      case 2:
      case 3:
        squareBrakets.push(str.match(regex).length);
        break;
      case 4:
      case 5:
        roundBrakets.push(str.match(regex).length);
        break;
    }
  });
  let roundValue = roundBrakets[0] == roundBrakets[1] ? true : false;

  let squareValue = squareBrakets[0] == squareBrakets[1] ? true : false;

  let curlyValue = curlyBrakets[0] == curlyBrakets[1] ? true : false;

  return roundValue && squareValue && curlyValue ? true : false;
}

module.exports = validateBrackets;
