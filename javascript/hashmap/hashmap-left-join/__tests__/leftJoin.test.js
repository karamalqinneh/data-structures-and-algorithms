const leftJoin = require("../index");
const HashMap = require("../../index");

describe("testing left join", () => {
  it("should return a map", () => {
    const hashmap01 = new HashMap(5);
    const hashmap02 = new HashMap(5);
    hashmap02.set("diligent", "idle");
    hashmap02.set("fondee", "averse");
    expect(leftJoin(hashmap01, hashmap02)).toBeInstanceOf(HashMap);
  });
  it("should not define new keys ", () => {
    const hashmap01 = new HashMap(5);
    const hashmap02 = new HashMap(5);
    hashmap01.set("diligent", "idle");
    hashmap01.set("fondee", "averse");
    hashmap02.set("do not return", "idle");
    hashmap02.set("fal", "averse");
    expect(leftJoin(hashmap01, hashmap02).keys()).toEqual([
      "fondee",
      "diligent",
    ]);
  });
  it("should join only one value ", () => {
    const hashmap01 = new HashMap(5);
    const hashmap02 = new HashMap(5);
    hashmap01.set(1, "idle");
    hashmap01.set(2, "averse");
    hashmap01.set(2, "idle");
    hashmap01.set(3, "averse");
    expect(
      leftJoin(hashmap01, hashmap02).map.reduce((acc, ele) => {
        return acc + ele.size;
      }, 0)
    ).toEqual(3);
  });
});
