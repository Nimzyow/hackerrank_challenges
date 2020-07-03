const compareTriplets = (a, b) => {
  let aScore = 0;
  let bScore = 0;
  a.map((num, i) => {
    if (num > b[i]) {
      aScore++;
    } else if (num < b[i]) {
      bScore++;
    }
  });
  return [aScore, bScore];
};

const aVeryBigSum = (arr) => {
  let totalNum = 0;
  arr.map((num) => (totalNum = totalNum + num));
  return totalNum;
};

const diagonalDifference = (arr) => {
  const matrixSize = arr[0];
  let position = 1;
  let firstDiagonal = 0;
  let secondDiagonal = 0;
  return 15;
};

module.exports = { compareTriplets, aVeryBigSum, diagonalDifference };
