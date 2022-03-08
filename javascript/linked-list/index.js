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
  append(value) {
    let node = new Node(value);
    let current;

    // If empty, make head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++;
  }
  insertBefore(value, index) {
    //  If index is out of range
    if (index > 0 && index > this.size) {
      return "out of range";
    }

    // If first index
    if (index === 0) {
      this.insert(value);
      return;
    }

    const node = new Node(value);
    let current, previous;

    // Set current to first
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current; // Node before index
      count++;
      current = current.next; // Node after index
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }

  insertAfter(value, index) {
    //  If index is out of range
    if (index > 0 && index > this.size) {
      return "out of range";
    }

    // If first index
    if (index === 0) {
      this.insert(value);
      return;
    }
    index += 1;
    const node = new Node(value);
    let current, previous;

    // Set current to first
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current; // Node before index
      count++;
      current = current.next; // Node after index
    }

    node.next = current;
    previous.next = node;

    this.size++;
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

  getFromtheEnd(index) {
    let current = this.head;
    let totalIndex = 0;

    while (current) {
      totalIndex++;
      current = current.next;
    }
    let desiredIndex = totalIndex - index;
    return this.getAt(desiredIndex);
  }
}

module.exports = LinkedList;
