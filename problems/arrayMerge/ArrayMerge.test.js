const arrayMerge = require("./ArrayMerge");

describe("array merge", () => {
  it("should return [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]", () => {
    const myArray = [3, 4, 6, 10, 11, 15];
    const anotherArray = [1, 5, 8, 12, 14, 19];
    const result = arrayMerge(myArray, anotherArray);
    expect(result).toEqual([1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]);
  });
  it("should return [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 20, 25]", () => {
    const myArray = [3, 4, 6, 10, 11, 15];
    const anotherArray = [1, 5, 8, 12, 14, 19, 20, 25];
    const result = arrayMerge(myArray, anotherArray);
    expect(result).toEqual([1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 20, 25]);
  });
  it("should return [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 35, 45]", () => {
    const myArray = [3, 4, 6, 10, 11, 15, 35, 45];
    const anotherArray = [1, 5, 8, 12, 14, 19];
    const result = arrayMerge(myArray, anotherArray);
    expect(result).toEqual([1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 35, 45]);
  });
});
