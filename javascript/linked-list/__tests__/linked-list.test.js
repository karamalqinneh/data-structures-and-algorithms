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
  it("Can successfully add a node to the end of the linked list", () => {
    const ll = new LinkedList();
    ll.insert("node1");
    ll.insert("node2");
    ll.insert("node3");
    ll.append("lastnode");
    expect(ll).toBeDefined();
    expect(ll.head.value).toEqual("node3");
    expect(ll.head.next.value).toEqual("node2");
    expect(ll.head.next.next.value).toEqual("node1");
    expect(ll.head.next.next.next.value).toEqual("lastnode");
  });
  it("Can successfully add multiple node to the end of the linked list", () => {
    const ll = new LinkedList();
    ll.insert("node1");
    ll.insert("node2");
    ll.append("node3");
    ll.append("lastnode");
    expect(ll).toBeDefined();
    expect(ll.head.value).toEqual("node2");
    expect(ll.head.next.value).toEqual("node1");
    expect(ll.head.next.next.value).toEqual("node3");
    expect(ll.head.next.next.next.value).toEqual("lastnode");
  });
  it("Can successfully insert a node before a node located 0 of a linked list", () => {
    const ll = new LinkedList();
    ll.append("node1");
    ll.insertBefore("newnode", 0);
    expect(ll).toBeDefined();
    expect(ll.head.value).toEqual("newnode");
  });
  it("Can successfully insert a node before a node located i the middle of a linked list", () => {
    const ll = new LinkedList();
    ll.append("node1");
    ll.append("node2");
    ll.append("node3");
    ll.append("lastnode");
    ll.insertBefore("newnode", 2);
    expect(ll).toBeDefined();
    expect(ll.head.value).toEqual("node1");
    expect(ll.head.next.value).toEqual("node2");
    expect(ll.head.next.next.value).toEqual("newnode");
  });
  it("Can successfully insert a node after a node located i the middle of a linked list", () => {
    const ll = new LinkedList();
    ll.append("node1");
    ll.append("node2");
    ll.append("node3");
    ll.append("lastnode");
    ll.insertAfter("newnode", 1);
    expect(ll).toBeDefined();
    expect(ll.head.value).toEqual("node1");
    expect(ll.head.next.value).toEqual("node2");
    expect(ll.head.next.next.value).toEqual("newnode");
  });
  it("Can successfully insert a node after the last node of the linked list", () => {
    const ll = new LinkedList();
    ll.append("node1");
    ll.append("lastnode");
    ll.insertAfter("newnode", 1);
    expect(ll).toBeDefined();
    expect(ll.head.next.next.value).toEqual("newnode");
  });
  it("Where k and the length of the list are the same", () => {
    const ll = new LinkedList();
    ll.append("node1");
    ll.append("node2");
    ll.append("node3");
    ll.append("node4");
    expect(ll.getFromtheEnd(4)).toEqual("node1");
  });
  it("Where k is not a positive integer", () => {
    const ll = new LinkedList();
    ll.append("node1");
    ll.append("node2");
    ll.append("node3");
    ll.append("node4");
    expect(ll.getFromtheEnd(-4)).toEqual(null);
  });
  it("“Happy Path” where k is not at the end, but somewhere in the middle of the linked list", () => {
    const ll = new LinkedList();
    ll.append("node1");
    ll.append("node2");
    ll.append("node3");
    ll.append("node4");
    expect(ll.getFromtheEnd(2)).toEqual("node3");
  });
  it("Where the linked list is of a size 1", () => {
    const ll = new LinkedList();
    ll.append("node1");
    expect(ll.getFromtheEnd(1)).toEqual("node1");
  });
});
