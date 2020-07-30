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
  reverseNum,
  birthdayCakeCandles,
  timeConversion,
};
