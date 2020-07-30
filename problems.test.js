const {
  aVeryBigSum,
  diagonalDifference,
  staircase,
  miniMax,
  extraLongFactorial,
  reverseNum,
  birthdayCakeCandles,
  timeConversion,
} = require("./problems");

describe("extra long factorials", () => {
  beforeEach(() => {
    console.log = jest.fn();
    jest.clearAllMocks();
  });
  it("should return 3,628,800 if passed in 10", () => {
    extraLongFactorial(10);
    expect(console.log).toHaveBeenCalledWith("3628800");
  });
  it("should return 15511210043330985984000000 if passed in 25", () => {
    extraLongFactorial(25);
    expect(console.log).toHaveBeenCalledWith("15511210043330985984000000");
  });
  it("should return 119622220865480194561963161495657715064383733760000000000 if passed in 45", () => {
    extraLongFactorial(45);
    expect(console.log).toHaveBeenCalledWith(
      "119622220865480194561963161495657715064383733760000000000",
    );
  });
});

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

describe("Birthday cake candles", () => {
  it("should return 2 when passing in array of 3, 2, 1, 3", () => {
    expect(birthdayCakeCandles([3, 2, 1, 3])).toEqual(2);
  });
  it("should return 2 when passing in array of 4, 2, 1, 3", () => {
    expect(birthdayCakeCandles([4, 2, 1, 3])).toEqual(1);
  });
});

describe("Time conversion", () => {
  it("should return 19:05:45 when passing in 07:05:45PM", () => {
    expect(timeConversion("07:05:45PM")).toEqual("19:05:45");
  });
  it("should return 21:06:40 when passing in 09:06:40PM", () => {
    expect(timeConversion("09:06:40PM")).toEqual("21:06:40");
  });
  it("should return 11:06:40 when passing in 11:06:40PM", () => {
    expect(timeConversion("11:06:40AM")).toEqual("11:06:40");
  });
  it("should return 00:00:00 when passing in 12:00:00AM", () => {
    expect(timeConversion("12:00:00AM")).toEqual("00:00:00");
  });
  it("should return 12:00:00 when passing in 12:00:00PM", () => {
    expect(timeConversion("12:00:00PM")).toEqual("12:00:00");
  });
  it("should return 12:45:54 when passing in 12:45:54PM", () => {
    expect(timeConversion("12:45:54PM")).toEqual("12:45:54");
  });
  it("should return 00:45:54 when passing in 12:45:54AM", () => {
    expect(timeConversion("12:45:54AM")).toEqual("00:45:54");
  });
});
