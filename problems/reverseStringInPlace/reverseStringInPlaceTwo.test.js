const ReverseStringInPlaceTwo = require("./ReverseStringInPlaceTwo");

describe('reverse strings in place two', () => {
    it('reverses abcde in place', () => {
        const result = ReverseStringInPlaceTwo(["a", "b", "c", "d", "e"])
        expect(result).toEqual(["e", "d", "c", "b", "a"])
    });
});