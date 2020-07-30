const reverseNum = require("./ReverseNum");

describe("reverseNum", () => {
  it("should correctly reverse 123", () => {
    expect(reverseNum(123)).toEqual(321);
  });
  it("should correctly reverse 456", () => {
    expect(reverseNum(456)).toEqual(654);
  });
  it("should return 0", () => {
    expect(reverseNum(0)).toEqual(0);
  });
  it("should correctly reverse -123", () => {
    expect(reverseNum(-123)).toEqual(-321);
  });
});
