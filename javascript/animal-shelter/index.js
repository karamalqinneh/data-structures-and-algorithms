/* eslint-disable indent */
"use strict";

const Queue = require("../stack-queue/queue");

class AnimalShelter {
  constructor() {
    this.cats = new Queue();
    this.dogs = new Queue();
  }

  enqueue(item) {
    switch (item.specie) {
      case "dog":
        this.dogs.enqueue(item);
        break;
      case "cat":
        this.cats.enqueue(item);
        break;
      default:
        return "can't be sheltered here";
    }
  }

  dequeue(pref) {
    switch (pref) {
      case "dog":
        return this.dogs.dequeue().specie;
      case "cat":
        return this.cats.dequeue().specie;
      default:
        this.dogs.storage.size > this.cats.storage.size
          ? this.dogs.dequeue()
          : this.cats.dequeue();
    }
  }
}

module.exports = AnimalShelter;
