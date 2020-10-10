const WorldCloud = require("./WorldCloud");

describe("World Cloud", () => {
    it("should return for I like cake ", () => {
        const result = WorldCloud("I like cake");
        expect(result).toEqual([
            ["I", 1],
            ["like", 1],
            ["cake", 1],
        ]);
    });
});
