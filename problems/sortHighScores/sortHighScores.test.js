const SortHighScores = require("./sortHighScores");

describe("Sort high scores sorts unsorted scores of", () => {
    it("[30, 21]", () => {
        const unsortedScores = [21, 31];
        const highestPossibleScore = 100;
        const result = SortHighScores(unsortedScores, highestPossibleScore);
        expect(result).toEqual([31, 21]);
    });
    it("[33, 21]", () => {
        const unsortedScores = [13, 25, 94, 36, 21, 55, 152];
        const highestPossibleScore = 160;
        const result = SortHighScores(unsortedScores, highestPossibleScore);
        expect(result).toEqual([152, 94, 55, 36, 25, 21, 13]);
    });
});
