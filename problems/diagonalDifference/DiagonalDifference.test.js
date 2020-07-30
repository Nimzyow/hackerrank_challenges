const diagonalDifference = require("./DiagonalDifference");

describe("Diagonal difference", () => {
  it("should return 15", () => {
    const result = diagonalDifference([
      [11, 2, 4],
      [4, 5, 6],
      [10, 8, -12],
    ]);
    expect(result).toEqual(15);
  });
  it("should return 25", () => {
    const result = diagonalDifference([
      [15, 4, 2],
      [1, 5, 8],
      [2, 2, 14],
    ]);
    expect(result).toEqual(25);
  });
  it("should return 5", () => {
    const result = diagonalDifference([
      [6, 2],
      [4, 5],
    ]);
    expect(result).toEqual(5);
  });
});
