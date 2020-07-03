const { compareTriplets, aVeryBigSum } = require("./problems");

describe("compare triplets", () => {
  it("should return [1,1]", () => {
    const result = compareTriplets([1, 2, 3], [3, 2, 1]);
    expect(result).toEqual([1, 1]);
  });
  it("should return [2,1]", () => {
    const result = compareTriplets([2, 3, 2], [1, 2, 3]);
    expect(result).toEqual([2, 1]);
  });
});

describe("a very big sum", () => {
  it("should return 15", () => {
    const result = aVeryBigSum([1, 2, 3, 4, 5]);
    expect(result).toEqual(15);
  });
  it("should return 5000000015", () => {
    const result = aVeryBigSum([
      1000000001,
      1000000002,
      1000000003,
      1000000004,
      1000000005,
    ]);
    expect(result).toEqual(5000000015);
  });
});
