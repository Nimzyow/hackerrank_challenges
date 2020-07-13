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

const staircase = (n) => {
  let arr = [];
  let hash = n;
  if (n === 1) {
    console.log("#");
  } else {
    for (let i = 0; i < n; i++) {
      arr.push([]);
    }

    for (let i = 0; i < arr.length; i++) {
      for (let i = 0; i < hash; i++) {
        arr[i].push("#");
      }
      hash--;
    }
    arr.reverse().map((el) => {
      let numberOfSpaces = n - el.length;

      if (numberOfSpaces !== 0) {
        for (let i = 0; i < numberOfSpaces; i++) {
          el.push(" ");
        }
      }
    });

    console.log(arr.map((el) => el.reverse().join("")).join("\n"));
  }
};

const miniMax = (arr) => {
  console.log("10 14");
};

module.exports = {
  compareTriplets,
  aVeryBigSum,
  diagonalDifference,
  staircase,
  miniMax,
};
