const inflightEntSys = require("./InflightEntSys");

describe("inflight Entertainment System", () => {
  it("should return true when flight time is 60 minutes and two films of 30 minutes are passed through", () => {
    const result = inflightEntSys(60, [30, 30]);
    expect(result).toEqual(true);
  });
  it("should return false when flight time is 60 minutes and two films of 20 minutes are passed through", () => {
    const result = inflightEntSys(60, [20, 20]);
    expect(result).toEqual(false);
  });
  it("should return true when flight time is 90 minutes and 2 films of 30 minutes and 1 film of 60 minutes are passed through", () => {
    const result = inflightEntSys(60, [30, 30, 60]);
    expect(result).toEqual(true);
  });
  it("should return true when flight time is 90 minutes and 1 film of 20 minutes, 1 film of 30 minutes and 1 film of 60 minutes are passed through", () => {
    const result = inflightEntSys(60, [20, 30, 60]);
    expect(result).toEqual(true);
  });
});
