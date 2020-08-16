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
    expect(result).toEqual([
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
  it("return an array of welcome to hell", () => {
    const result = ReverseWordsTwo([
      "h",
      "e",
      "l",
      "l",
      " ",
      "t ",
      "o",
      " ",
      "w",
      "e",
      "l",
      "c",
      "o",
      "m",
      "e",
    ]);
    expect(result).toEqual([
      "w",
      "e",
      "l",
      "c",
      "o",
      "m",
      "e",
      " ",
      "t ",
      "o",
      " ",
      "h",
      "e",
      "l",
      "l",
    ]);
  });
});
