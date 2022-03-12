"use strict";

const LinkedList = require("./index");

function linkedListZip(ll1, ll2) {
  const output = new LinkedList();

  let bigger = ll1.size > ll2.size ? ll1.size : ll2.size;

  let current1 = ll1.head;
  let current2 = ll2.head;
  let count = 0;
  while (count < bigger) {
    if (current1 !== null) {
      output.append(current1.value);
      current1 = current1.next;
    }
    if (current2 !== null) {
      output.append(current2.value);
      current2 = current2.next;
    }
    count++;
  }
  return output;
}

const ll1 = new LinkedList();
const ll2 = new LinkedList();
ll1.append("node1");
ll1.append("node3");

console.log(linkedListZip(ll1, ll2).toString());

module.exports = linkedListZip;
