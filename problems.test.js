const {
  compareTriplets,
  aVeryBigSum,
  diagonalDifference,
  staircase,
  miniMax,
  extraLongFactorial,
  reverseNum,
  birthdayCakeCandles,
} = require("./problems");

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

describe("staircase", () => {
  beforeEach(() => {
    console.log = jest.fn();
    jest.clearAllMocks();
  });
  it("should log #", () => {
    const result = staircase(1);
    expect(console.log).toHaveBeenCalledWith("#");
  });
  it("should log # and ## on a new line", () => {
    const result = staircase(2);
    expect(console.log).toHaveBeenCalledWith(" #\n##");
  });
  it("should log # and ## and ###, each on a new line", () => {
    const result = staircase(3);
    expect(console.log).toHaveBeenCalledWith("  #\n ##\n###");
  });
});

describe("mini-max sum", () => {
  beforeEach(() => {
    console.log = jest.fn();
    jest.clearAllMocks();
  });
  it("should log '10 14' if passed an array of 1,2,3,4,5", () => {
    miniMax([1, 2, 3, 4, 5]);
    expect(console.log).toHaveBeenCalledWith("10 14");
  });
  it("should log '16 24' if passed an array of 1,3,5,7,9", () => {
    miniMax([1, 3, 5, 7, 9]);
    expect(console.log).toHaveBeenCalledWith("16 24");
  });
  it("should log '299 9271' if passed an array of 7, 69, 2, 221, 8974", () => {
    miniMax([7, 69, 2, 221, 8974]);
    expect(console.log).toHaveBeenCalledWith("299 9271");
  });
});

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
