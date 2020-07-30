const birthdayCakeCandles = require("./BirthdayCakeCandles");

describe("Birthday cake candles", () => {
  it("should return 2 when passing in array of 3, 2, 1, 3", () => {
    expect(birthdayCakeCandles([3, 2, 1, 3])).toEqual(2);
  });
  it("should return 2 when passing in array of 4, 2, 1, 3", () => {
    expect(birthdayCakeCandles([4, 2, 1, 3])).toEqual(1);
  });
});
