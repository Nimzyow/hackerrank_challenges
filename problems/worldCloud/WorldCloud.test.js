const WorldCloud = require("./WorldCloud");

describe("World Cloud", () => {
  it("should return for I like cake ", () => {
    const result = WorldCloud("I like cake");
    const expected = new Map([
      ["I", 1],
      ["like", 1],
      ["cake", 1],
    ]);
    expect(result).toEqual(expected);
  });
});
