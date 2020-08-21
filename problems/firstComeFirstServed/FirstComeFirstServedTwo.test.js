const firstComeFirstServed = require("./FirstComeFirstServedTwo");
const FirstComeFirstServedTwo = require("./FirstComeFirstServedTwo");

describe("First come first served", () => {
  describe("is true", () => {
    it("when passing [1,2], [3,4], [1,2,3,4]", () => {
      const result = firstComeFirstServed([1, 2], [3, 4], [1, 2, 3, 4]);
      expect(result).toBe(true);
    });
    it("when passing [5,2,4,6], [10,16,17,13], [5, 10, 2, 16, 17, 4, 13, 6]", () => {
      const result = firstComeFirstServed(
        [5, 2, 4, 6],
        [10, 16, 17, 13],
        [5, 10, 2, 16, 17, 4, 13, 6],
      );
      expect(result).toBe(true);
    });
  });
  describe("is false", () => {
    it("when passing [1,2], [3,4], [2,3,1,4]", () => {
      const result = FirstComeFirstServedTwo([1, 2], [3, 4], [2, 3, 1, 4]);
      expect(result).toBe(false);
    });
    it("when passing [1,2,3], [5,4,8], [1,3,2,8,5,4]", () => {
      const result = FirstComeFirstServedTwo(
        [1, 2],
        [3, 4],
        [1, 3, 2, 8, 5, 4],
      );
      expect(result).toBe(false);
    });
  });
});
