const getWord = require("../index");

describe("testing hashmap get first word", () => {
  it("should return null for an empty string", () => {
    expect(getWord("")).toEqual(null);
  });
  it("should return the repeated word", () => {
    expect(
      getWord("Once upon a time, there was a brave princess who...")
    ).toEqual("a");
  });
  it("should return the first repeated word", () => {
    expect(
      getWord("Once test upon test a time, there was a brave princess who...")
    ).toEqual("test");
  });
});
