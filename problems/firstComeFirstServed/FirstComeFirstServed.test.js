const firstComeFirstServed = require("./FireComeFirstServed");

describe("First come first served", () => {
  it("should return 'First come first served' if take out orders and dine in orders are served sequentially ", () => {
    const result = firstComeFirstServed([17, 8], [1, 5], [17, 8, 1, 5]);
    expect(result).toBe("First come first served");
  });
  it("should return 'NOT First come first served' if take out orders and dine in orders are not served sequentially ", () => {
    const result = firstComeFirstServed([17, 8], [1, 5], [8, 17, 1, 5]);
    expect(result).toBe("NOT First come first served");
  });
  it("should return 'NOT First come first served' if take out orders and dine in orders are not served sequentially ", () => {
    const result = firstComeFirstServed([17, 8], [1, 5], [8, 17, 5, 1]);
    expect(result).toBe("NOT First come first served");
  });
  it("should return 'NOT First come first served' if take out orders and dine in orders are not served sequentially ", () => {
    const result = firstComeFirstServed([17, 8], [1, 5], [8, 1, 5, 17]);
    expect(result).toBe("NOT First come first served");
  });
  it("should return 'NOT First come first served' if take out orders and dine in orders are not served sequentially ", () => {
    const result = firstComeFirstServed(
      [17, 8],
      [1, 5, 6, 9],
      [17, 8, 1, 5, 9, 6],
    );
    expect(result).toBe("NOT First come first served");
  });
});
