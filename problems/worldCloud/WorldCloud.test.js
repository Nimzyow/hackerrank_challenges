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
  it("should return for I like cake but I also like chocolate ", () => {
    const result = WorldCloud("I like cake but I also like chocolate");
    const expected = new Map([
      ["I", 2],
      ["like", 2],
      ["cake", 1],
      ["but", 1],
      ["also", 1],
      ["chocolate", 1],
    ]);
    expect(result).toEqual(expected);
  });
  it("should return for Cliff sat on the edge of a cliff", () => {
    const result = WorldCloud(
      "The waiter grabbed the bill to hand to the customer"
    );
    const expected = new Map([
      ["the", 3],
      ["waiter", 1],
      ["grabbed", 1],
      ["bill", 1],
      ["to", 2],
      ["hand", 1],
      ["customer", 1],
    ]);
    expect(result).toEqual(expected);
  });
});
