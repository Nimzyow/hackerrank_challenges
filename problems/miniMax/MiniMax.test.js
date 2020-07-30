const miniMax = require("./MiniMax")

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