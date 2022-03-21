const AnimalShelter = require("../index");

describe("testing the queue", () => {
  it("test creaing a queue", () => {
    let newAnimalShelter = new AnimalShelter();
    expect(newAnimalShelter instanceof AnimalShelter).toBeTruthy();
  });

  it("testing enqueue to the queue", () => {
    let newAnimalShelter = new AnimalShelter();
    newAnimalShelter.enqueue({ specie: "dog" });
    expect(newAnimalShelter.dogs.storage.head.value.specie).toEqual("dog");
    newAnimalShelter.enqueue({ specie: "cat" });
    expect(newAnimalShelter.cats.storage.head.value.specie).toEqual("cat");
  });

  it("testing pop from the queue", () => {
    let newAnimalShelter = new AnimalShelter();
    newAnimalShelter.enqueue({ specie: "dog" });
    newAnimalShelter.enqueue({ specie: "cat" });
    newAnimalShelter.enqueue({ specie: "cat" });
    newAnimalShelter.enqueue({ specie: "dog" });
    newAnimalShelter.enqueue({ specie: "dog" });
    expect(newAnimalShelter.dequeue("cat")).toEqual("cat");
    expect(newAnimalShelter.dequeue("dog")).toEqual("dog");
  });
});
