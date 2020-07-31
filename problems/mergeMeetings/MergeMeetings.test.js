const mergeMeetings = require("./MergeMeetings");

describe("mergeMeetings", () => {
  it("should merge meetings when first meeting is from 1 - 3 and second meeting is from 2 - 4 ", () => {
    const result = mergeMeetings([
      { startTime: 1, endTime: 3 },
      { startTime: 2, endTime: 4 },
    ]);
    expect(result).toEqual([{ startTime: 1, endTime: 4 }]);
  });
  it("should merge meetings when first meeting is from 1 - 3 and second meeting is from 2 - 5 ", () => {
    const result = mergeMeetings([
      { startTime: 1, endTime: 3 },
      { startTime: 2, endTime: 5 },
    ]);
    expect(result).toEqual([{ startTime: 1, endTime: 5 }]);
  });
  it("should merge meetings when first meeting is from 1 - 3 and second meeting is from 2 - 5 and third meeting is from 4 - 7", () => {
    const result = mergeMeetings([
      { startTime: 1, endTime: 3 },
      { startTime: 2, endTime: 5 },
      { startTime: 4, endTime: 7 },
    ]);
    expect(result).toEqual([{ startTime: 1, endTime: 7 }]);
  });
  it("should create two meetings. first is 1 - 5 and second meeting is from 6 - 7", () => {
    const result = mergeMeetings([
      { startTime: 1, endTime: 3 },
      { startTime: 2, endTime: 5 },
      { startTime: 6, endTime: 7 },
    ]);
    expect(result).toEqual([
      { startTime: 1, endTime: 5 },
      { startTime: 6, endTime: 7 },
    ]);
  });
  it("should merge meetings when first meeting is from 1 - 5 and second meeting is from 5 - 7", () => {
    const result = mergeMeetings([
      { startTime: 1, endTime: 5 },
      { startTime: 5, endTime: 7 },
    ]);
    expect(result).toEqual([{ startTime: 1, endTime: 7 }]);
  });
  it.only("should merge meetings when first meeting is from 5 - 7 and second meeting is from 1 - 5", () => {
    const result = mergeMeetings([
      { startTime: 5, endTime: 7 },
      { startTime: 1, endTime: 5 },
    ]);
    expect(result).toEqual([{ startTime: 1, endTime: 7 }]);
  });
});
