function arrayInsertShift(arr, value) {
  let middle = Math.floor(arr.length / 2);
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(i);
    if (i < middle) {
      output[i] = arr[i];
    } else if (i === middle) {
      output[i + 1] = arr[i];
      output[i] = value;
    } else {
      output[i + 1] = arr[i];
    }
  }
  return output;
}

module.exports = arrayInsertShift;
