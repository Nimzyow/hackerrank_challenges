const palindronePermutation = require("./palindromePermutationTwo");
describe("palindrome permutation", () => {
  describe("returns true if word is", () => {
    it("civic", () => {
      const result = palindronePermutation("civic");
      expect(result).toEqual(true);
    });
    it("racecar", () => {
      const result = palindronePermutation("racecar");
      expect(result).toEqual(true);
    });
    it("ciciv", () => {
      const result = palindronePermutation("ciciv");
      expect(result).toEqual(true);
    });
  });
  describe("returns false if word is", () => {
    it("civil", () => {
      const result = palindronePermutation("civil");
      expect(result).toBe(false);
    });
    it("shoe", () => {
      const result = palindronePermutation("shoe");
      expect(result).toBe(false);
    });
  });
});
