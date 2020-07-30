const extraLongFactorial = require("./ExtraLongFactorial");

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
