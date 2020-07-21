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
  let sortedArr = arr.sort();
  const removeFirstItem = sortedArr.slice(1);
  const removeLastItem = sortedArr.slice(0, sortedArr.length - 1);

  const reducer = (arr) => {
    return arr.reduce((total, num) => {
      return total + num;
    });
  };

  const removeFirstItemSum = reducer(removeFirstItem);
  const removeLastItemSum = reducer(removeLastItem);
  console.log(`${removeLastItemSum} ${removeFirstItemSum}`);
};

const extraLongFactorial = (n) => {
  let memoization = [BigInt(0), BigInt(1)];

  const factorial = (num) =>
    typeof memoization[num] !== "number"
      ? num - BigInt(1) > 0
        ? num * factorial(num - BigInt(1))
        : BigInt(1)
      : memoization[num];

  console.log(String(factorial(BigInt(n))));
};

const reverseAndJoin = (arr) => {
  arr.reverse();
  return arr.join("");
};

const reverseNum = (n) => {
  const nToString = String(n);
  const stringToArray = nToString.split("");
  if (!nToString.includes("-")) {
    const stringJoined = reverseAndJoin(stringToArray);
    return Number(stringJoined);
  }
  stringToArray.shift();
  const stringJoined = reverseAndJoin(stringToArray);
  return Number(stringJoined) * -1;
};

const birthdayCakeCandles = (ar) => {
  let max = Math.max(...ar);
  return ar.filter((n) => n === max).length;
};

module.exports = {
  compareTriplets,
  aVeryBigSum,
  diagonalDifference,
  staircase,
  miniMax,
  extraLongFactorial,
  reverseNum,
  birthdayCakeCandles,
};
