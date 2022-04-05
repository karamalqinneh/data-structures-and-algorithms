"use strict";

class KaryNode {
  constructor(value = null) {
    this.value = value;
    this.children = [];
  }

  appendChild(value) {
    this.children.push(new KaryNode(value));
  }
}

module.exports = KaryNode;
