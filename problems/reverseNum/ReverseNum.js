const reverseAndJoin = (arr) => {
  arr.reverse();
  return arr.join("");
};

module.exports = (n) => {
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
