"use strict";

const insertionSort = (arr) => {
  let j;
  let temp;
  for (let i = 1; i <= arr.length - 1; i++) {
    j = i - 1;
    temp = arr[i];
    while (j >= 0 && temp < arr[j]) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = temp;
  }
  return arr;
};

module.exports = insertionSort;
