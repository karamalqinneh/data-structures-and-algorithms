"use strict";

const Graph = require("../index");
const Vertex = require("../../vertex");

describe("testing business trip", () => {
  it("should return null for empty arr", () => {
    const graph01 = new Graph();
    const zero = new Vertex(0);
    const one = new Vertex(1);
    const two = new Vertex(2);
    graph01.addVertex(zero);
    graph01.addVertex(one);
    graph01.addVertex(two);
    graph01.addEdge(zero, one, 5);
    graph01.addEdge(zero, two, 5);
    graph01.addEdge(one, two, 22);
    expect(graph01.businessTrip([])).toEqual(null);
  });
  it("should return the correct sum", () => {
    const graph01 = new Graph();
    const zero = new Vertex(0);
    const one = new Vertex(1);
    const two = new Vertex(2);
    graph01.addVertex(zero);
    graph01.addVertex(one);
    graph01.addVertex(two);
    graph01.addEdge(zero, one, 5);
    graph01.addEdge(zero, two, 5);
    graph01.addEdge(one, two, 22);
    expect(graph01.businessTrip([zero, one])).toEqual(5);
  });
  it("should return the correct sum for a compound sum", () => {
    const graph01 = new Graph();
    const zero = new Vertex(0);
    const one = new Vertex(1);
    const two = new Vertex(2);
    graph01.addVertex(zero);
    graph01.addVertex(one);
    graph01.addVertex(two);
    graph01.addEdge(zero, one, 5);
    graph01.addEdge(zero, two, 5);
    graph01.addEdge(one, two, 22);
    expect(graph01.businessTrip([zero, one, two])).toEqual(27);
  });
  it("should return null if there is no route", () => {
    const graph01 = new Graph();
    const zero = new Vertex(0);
    const one = new Vertex(1);
    const two = new Vertex(2);
    const three = new Vertex(3);
    graph01.addVertex(zero);
    graph01.addVertex(one);
    graph01.addVertex(two);
    graph01.addVertex(three);
    graph01.addEdge(zero, one, 5);
    graph01.addEdge(zero, two, 5);
    graph01.addEdge(one, two, 22);
    graph01.addEdge(one, three, 10);
    expect(graph01.businessTrip([zero, one, two, three])).toEqual(null);
  });
});
