const timeConversion = require("./TimeConversion");

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
