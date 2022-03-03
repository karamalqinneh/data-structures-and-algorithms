"use strict";

const Node = require("./node");

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  insert(value) {
    try {
      let node = new Node(value);
      if (this.head) {
        node.next = this.head;
        this.head = node;
        this.size++;
      } else {
        this.head = node;
        this.size++;
      }
    } catch (e) {
      console.error("Error in inserting values");
    }
  }
  includes(value) {
    try {
      let current = this.head;

      while (current) {
        if (current.value === value) {
          return true;
        }
        current = current.next;
      }
      return false;
    } catch (e) {
      console.error("Error in finding values");
    }
  }
  toString() {
    try {
      let current = this.head;
      let output = "";
      while (current) {
        output += ` { ${current.value} } ->`;
        current = current.next;
      }
      output += " NULL";
      return output;
    } catch (e) {
      console.error("Error in printing values");
    }
  }
  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        return current.value;
      }
      count++;
      current = current.next;
    }

    return null;
  }
}

module.exports = LinkedList;
