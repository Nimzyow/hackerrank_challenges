const sortScores = require("./sortHighScoresTwo");
describe("sort high scores", () => {
    it("sorts from high to low", () => {
        const unsortedScores = [23, 89];
        const highestPossibleScore = 100;
        const result = sortScores(unsortedScores, highestPossibleScore);
        expect(result).toEqual([89, 23]);
    });
    it("sorts from high to low", () => {
        const unsortedScores = [23, 89, 23];
        const highestPossibleScore = 100;
        const result = sortScores(unsortedScores, highestPossibleScore);
        expect(result).toEqual([89, 23, 23]);
    });
    it("sorts from high to low", () => {
        const unsortedScores = [23, 89, 23, 89, 40, 12, 78];
        const highestPossibleScore = 100;
        const result = sortScores(unsortedScores, highestPossibleScore);
        expect(result).toEqual([89, 89, 78, 40, 23, 23, 12]);
    });
    it("sorts from high to low", () => {
        const unsortedScores = [23, 89, 23, 89, 40, 12, 78, 0];
        const highestPossibleScore = 100;
        const result = sortScores(unsortedScores, highestPossibleScore);
        expect(result).toEqual([89, 89, 78, 40, 23, 23, 12, 0]);
    });
});
