const HashMap = require("../index");

const getFirstRepeatedWord = (str) => {
  let storage = new HashMap(10);
  let splitted = str.split(" ");
  splitted.forEach((ele, idx) => storage.set(ele, idx));
  let keys = storage.keys();
  for (let i = 0; i < keys.length - 1; i++) {
    if (keys.indexOf(keys[i], i + 1) > -1) {
      return keys[i];
    }
  }
  return null;
};

module.exports = getFirstRepeatedWord;
