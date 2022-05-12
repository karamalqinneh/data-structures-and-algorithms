"use strict";

// Require our linked list implementation
const HashMap = require("../index");

describe("testing Hashmap", () => {
  beforeEach(() => {
    const hashmap01 = new HashMap(3);
    hashmap01.set("Razan", "Instructor");
    hashmap01.set("Yazan", "TA");
    hashmap01.set("Karam", "Learner");
    hashmap01.set("Mohammad", "Learner");
    return hashmap01;
  });

  it("Setting a key/value to your hashtable results in the value being in the data structure", () => {
    const hashmap01 = new HashMap(3);
    hashmap01.set("Karam", "Learner");
    expect(hashmap01.contains("Karam")).toEqual(true);
  });
  it("Retrieving based on a key returns the value stored", () => {
    const hashmap01 = new HashMap(3);
    hashmap01.set("Karam", "Learner");
    expect(hashmap01.get("Karam")).toEqual("Learner");
  });
  it("Successfully returns null for a key that does not exist in the hashtable", () => {
    const hashmap01 = new HashMap(3);
    expect(hashmap01.get("Karam")).toEqual(null);
  });
  it("Successfully returns a list of all unique keys that exist in the hashtable", () => {
    const hashmap01 = new HashMap(3);
    hashmap01.set("Razan", "Instructor");
    hashmap01.set("Yazan", "TA");
    hashmap01.set("Karam", "Learner");
    hashmap01.set("Mohammad", "Learner");
    expect(hashmap01.keys("Karam")).toEqual([
      "Mohammad",
      "Karam",
      "Yazan",
      "Razan",
    ]);
  });
  it("Successfully handle a collision within the hashtable", () => {
    const hashmap01 = new HashMap(3);
    hashmap01.set("Karam", "Learner");
    hashmap01.set("Karam", "TA");
    hashmap01.set("Karam", "Instructor");
    expect(hashmap01.keys().length).toEqual(3);
  });
  it("Successfully handle a collision within the hashtable", () => {
    const hashmap01 = new HashMap(1);
    hashmap01.set("Karam", "Learner");
    hashmap01.set("Yazan", "TA");
    expect(hashmap01.get("Yazan")).toEqual("TA");
  });
});
