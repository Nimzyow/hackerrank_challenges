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

module.exports = compareTriplets;
