module.exports = (unsortedScores, highestPossibleScore) => {
    //create an array from 0 to highest possible score and fill it with 0
    const scoreCount = new Array(highestPossibleScore + 1).fill(0);

    unsortedScores.forEach((score) => {
        scoreCount[score]++;
    });
    let sortedScores = [];

    for (let score = highestPossibleScore; score >= 0; score--) {
        //we set the current score
        const currentScore = scoreCount[score];
        for (let time = 0; time < currentScore; time++) {
            sortedScores.push(score);
        }
    }
    return sortedScores;
};
