"use strict";

// Require our linked list implementation
const LinkedList = require("../index");
const linkedListZip = require("../linked-list-zip");

describe("testing Linked List", () => {
  it("test the merge", () => {
    const ll1 = new LinkedList();
    const ll2 = new LinkedList();
    ll1.append("node1");
    ll2.append("node2");
    ll1.append("node3");
    ll2.append("node4");
    expect(linkedListZip(ll1, ll2).toString()).toEqual(
      " { node1 } -> { node2 } -> { node3 } -> { node4 } -> NULL"
    );
  });
  it("test the merge with non symetrical lists", () => {
    const ll1 = new LinkedList();
    const ll2 = new LinkedList();
    ll1.append("node1");
    ll2.append("node2");
    ll1.append("node3");
    ll2.append("node4");
    ll2.append("node5");
    ll2.append("node6");
    ll2.append("node7");
    expect(linkedListZip(ll1, ll2).toString()).toEqual(
      " { node1 } -> { node2 } -> { node3 } -> { node4 } -> { node5 } -> { node6 } -> { node7 } -> NULL"
    );
  });
  it("test the merge with an empty list", () => {
    const ll1 = new LinkedList();
    const ll2 = new LinkedList();
    ll1.append("node1");
    ll1.append("node3");
    expect(linkedListZip(ll1, ll2).toString()).toEqual(
      " { node1 } -> { node3 } -> NULL"
    );
  });
});
