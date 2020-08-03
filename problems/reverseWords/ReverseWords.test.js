const reverseWords = require("./ReverseWords");

describe("reverse words", () => {
  it("should reverse array of cake pound steal ", () => {
    const result = reverseWords([
      "c",
      "a",
      "k",
      "e",
      " ",
      "p",
      "o",
      "u",
      "n",
      "d",
      " ",
      "s",
      "t",
      "e",
      "a",
      "l",
    ]);
    expect(result).toEqual([
      "s",
      "t",
      "e",
      "a",
      "l",
      " ",
      "p",
      "o",
      "u",
      "n",
      "d",
      " ",
      "c",
      "a",
      "k",
      "e",
    ]);
  });
  it("should reverse array of laura, cinthya, nima ", () => {
    const result = reverseWords([
      "l",
      "a",
      "u",
      "r",
      "a",
      " ",
      "c",
      "i",
      "n",
      "t",
      "h",
      "y",
      "a",
      " ",
      "n",
      "i",
      "m",
      "a",
    ]);
    expect(result).toEqual([
      "n",
      "i",
      "m",
      "a",
      " ",
      "c",
      "i",
      "n",
      "t",
      "h",
      "y",
      "a",
      " ",
      "l",
      "a",
      "u",
      "r",
      "a",
    ]);
  });
});
