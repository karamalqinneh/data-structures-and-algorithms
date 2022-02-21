function arrayReverse(arr) {
  let output = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    output[arr.length - 1 - i] = arr[i];
  }
  return output;
}

module.exports = { arrayReverse };
