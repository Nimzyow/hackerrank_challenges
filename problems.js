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

const timeConversion = (time) => {
  if (time === "12:00:00AM") {
    return "00:00:00";
  }
  if (time === "12:00:00PM") {
    return "12:00:00";
  }
  if (time.split("").slice(0, 2).join("") === "12" && time.includes("AM")) {
    let timeSplit = time.split("");
    timeSplit.pop();
    timeSplit.pop();
    timeSplit[0] = "0";
    timeSplit[1] = "0";
    return timeSplit.join("");
  }
  if (time.includes("AM") || time.split("").slice(0, 2).join("") === "12") {
    let timeSplit = time.split("");
    timeSplit.pop();
    timeSplit.pop();
    return timeSplit.join("");
  }

  let timeSplit = time.split(":");
  timeSplit[0] = String(Number(timeSplit[0]) + 12);
  const withoutPm = timeSplit[2].split("PM")[0];
  timeSplit[2] = withoutPm;
  return timeSplit.join(":");
};

module.exports = {
  staircase,
  miniMax,
  extraLongFactorial,
  reverseNum,
  birthdayCakeCandles,
  timeConversion,
};
