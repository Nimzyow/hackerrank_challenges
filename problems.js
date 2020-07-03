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
  const matrixSize = arr[0].length;
  let arrJoined = [].concat.apply([], arr);
  let count = 0;
  let position = 0;
  let firstDiagonal = 0;
  let secondDiagonal = 0;

  while (count < matrixSize) {
    firstDiagonal = firstDiagonal + arrJoined[position];
    position = position + (matrixSize + 1);
    count++;
  }
  count = 0;
  position = arrJoined.length - 1 - (matrixSize - 1);
  while (count < matrixSize) {
    secondDiagonal = secondDiagonal + arrJoined[position];
    position = position - (matrixSize - 1);
    count++;
  }

  let difference = firstDiagonal - secondDiagonal;

  if (difference < 0) {
    return difference * -1;
  }

  return difference;
};

module.exports = { compareTriplets, aVeryBigSum, diagonalDifference };
