const ReverseWordsTwo = require("./ReverseWordsTwo");

describe("ReverseWordsTwo", () => {
  it("return an array of hello world", () => {
    const result = ReverseWordsTwo([
      "w",
      "o",
      "r",
      "l",
      "d",
      " ",
      "h",
      "e",
      "l",
      "l",
      "o",
    ]);
    expect(result).toBe([
      "h",
      "e",
      "l",
      "l",
      "o",
      " ",
      "w",
      "o",
      "r",
      "l",
      "d",
    ]);
  });
});
