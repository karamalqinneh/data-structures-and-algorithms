"use strict";

const mergeSort = (arr) => {
  let n = arr.length;
  if (n > 1) {
    let mid = n / 2;
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    mergeSort(left);
    mergeSort(right);
    merge(left, right, arr);
  }
  function merge(left, right, arr) {
    let i = 0;
    let j = 0;
    let k = 0;
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        arr[k] = left[i];
        i = i + 1;
      } else {
        arr[k] = right[j];
        j = j + 1;
      }
      k = k + 1;
    }
    if (i === left.length) {
      arr.push(...right.slice(j));
    } else {
      arr.push(...left.slice(i));
    }
  }
  return [...new Set(arr)];
};

module.exports = mergeSort;
