const reverseStringInPlace = require("./ReverseStringInPlace");

describe("reverse string in place", () => {
  it("input of 'abcde' should return edcba", () => {
    const result = reverseStringInPlace(["a", "b", "c", "d", "e"]);
    expect(result).toEqual(["e", "d", "c", "b", "a"]);
  });
  it("input of 'lkjhg' should return ghjkl", () => {
    const result = reverseStringInPlace(["l", "k", "j", "h", "g"]);
    expect(result).toEqual(["g", "h", "j", "k", "l"]);
  });
});
