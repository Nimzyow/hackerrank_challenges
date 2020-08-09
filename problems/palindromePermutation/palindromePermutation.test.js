const palindromePermutation = require("./palindromePermutation");

describe("palindromePermutation", () => {
  describe("returns true with", () => {
    it("civic", () => {
      const result = palindromePermutation("civic");
      expect(result).toEqual(true);
    });
    it("ccarare", () => {
      const result = palindromePermutation("ccarare");
      expect(result).toEqual(true);
    });
    it("wow", () => {
      const result = palindromePermutation("wow");
      expect(result).toEqual(true);
    });
    it("wwo", () => {
      const result = palindromePermutation("wwo");
      expect(result).toEqual(true);
    });
  });
  describe("returns false with", () => {
    it("civil", () => {
      const result = palindromePermutation("civil");
      expect(result).toEqual(false);
    });
    it("livci", () => {
      const result = palindromePermutation("livci");
      expect(result).toEqual(false);
    });
  });
});
