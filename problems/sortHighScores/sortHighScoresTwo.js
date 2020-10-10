module.exports = (unsortedScores, highestPossibleScore) => {
    //first create array from 0 to highest possible score and fill each with 0
    //map unsorted score against position in array
    //create sorted array
    //do a for loop from highest possible score to 0
    //if value in for loop is greater than 0, push score into sorted array

    const scoreRange = new Array(highestPossibleScore + 1).fill(0);

    unsortedScores.map((score) => scoreRange[score]++);
    let sortedArray = [];
    for (let i = highestPossibleScore; i >= 0; i--) {
        if (scoreRange[i] > 0) {
            for (let j = 0; j < scoreRange[i]; j++) {
                sortedArray.push(i);
            }
        }
    }
    return sortedArray;
};
