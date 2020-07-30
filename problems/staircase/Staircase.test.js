const staircase = require("./Staircase")

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