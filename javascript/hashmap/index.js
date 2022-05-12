const LinkedList = require("../linked-list/index");

class HashMap {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  encode(key) {
    return (
      (key.split("").reduce((acc, char) => {
        return acc + char.charCodeAt();
      }, 0) *
        444) %
      this.size
    );
  }

  set(key, value) {
    let hashIdx = this.encode(key);
    if (!this.map[hashIdx]) {
      this.map[hashIdx] = new LinkedList();
      let obj = {};
      obj[key] = value;
      this.map[hashIdx].insert(obj);
    } else {
      let obj = {};
      obj[key] = value;
      this.map[hashIdx].insert(obj);
    }
  }
  get(key) {
    let hashIdx = this.encode(key);
    if (!this.map[hashIdx]) {
      return null;
    } else {
      let current = this.map[hashIdx].head;
      while (current) {
        let indexOfTheKey = Object.keys(current.value).indexOf(key);
        if (indexOfTheKey >= 0) {
          return current.value[Object.keys(current.value)[indexOfTheKey]];
        }
        current = current.next;
      }
    }
  }
  contains(key) {
    let hashIdx = this.encode(key);
    if (!this.map[hashIdx]) {
      return false;
    } else {
      return true;
    }
  }
  keys() {
    let keysCollection = [];
    this.map.forEach((ele) => {
      if (ele) {
        let current = ele.head;
        while (current) {
          keysCollection.push(...Object.keys(current.value));
          current = current.next;
        }
      }
    });
    return keysCollection;
  }
}

module.exports = HashMap;
