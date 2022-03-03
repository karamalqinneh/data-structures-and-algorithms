"use strict";

// Require our linked list implementation
const LinkedList = require("../index");

describe("testing Linked List", () => {
  it("test creating an LL instance", () => {
    const ll = new LinkedList();

    expect(ll).toBeDefined();
    expect(ll.head).toBeNull();
  });
  it("Can properly insert into the linked list", () => {
    const ll = new LinkedList();
    ll.insert("test");
    expect(ll).toBeDefined();
    expect(ll.head.value).toEqual("test");
  });
  it("The head property will properly point to the first node in the linked list", () => {
    const ll = new LinkedList();
    ll.insert("test");
    expect(ll).toBeDefined();
    expect(ll.getAt(0)).toEqual("test");
  });
  it("Can properly insert multiaple node into the linked list", () => {
    const ll = new LinkedList();
    ll.insert("node1");
    ll.insert("node2");
    ll.insert("node3");
    expect(ll).toBeDefined();
    expect(ll.head.value).toEqual("node3");
    expect(ll.head.next.value).toEqual("node2");
    expect(ll.head.next.next.value).toEqual("node1");
  });
  it("Will return true/false when finding a value within the linked list that exists/ not exists", () => {
    const ll = new LinkedList();
    ll.insert("node1");
    ll.insert("node2");
    ll.insert("node3");
    expect(ll).toBeDefined();
    expect(ll.includes("node2")).toEqual(true);
    expect(ll.includes("node55")).toEqual(false);
  });
  it("Can properly return a collection of all the values that exist in the linked list", () => {
    const ll = new LinkedList();
    ll.insert("node1");
    ll.insert("node2");
    ll.insert("node3");
    expect(ll.toString()).toEqual(
      " { node3 } -> { node2 } -> { node1 } -> NULL"
    );
  });
});
