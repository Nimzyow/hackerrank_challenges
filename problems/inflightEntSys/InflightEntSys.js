// module.exports = (flightTime, filmTimes) => {
//   let filmTimesIndex = 0;
//   let filmToCompareTo = 0;

//   while (
//     filmTimesIndex < filmTimes.length &&
//     filmToCompareTo < filmTimes.length
//   ) {
//     let timeLeft = flightTime - filmTimes[filmToCompareTo];
//     const filmFinishableInFlightTime = timeLeft - filmTimes[filmTimesIndex];
//     if (filmToCompareTo === filmTimesIndex) {
//       filmTimesIndex++;
//     } else if (filmFinishableInFlightTime === 0) {
//       return true;
//     } else {
//       filmTimesIndex++;
//     }
//     if (filmTimesIndex === filmTimes.length) {
//       filmToCompareTo++;
//       filmTimesIndex = 0;
//     }
//   }
//   return false;
// };

//second solution costing O(n) time and O(n) space

module.exports = (flightTime, movieTimes) => {
  let moviesSeen = new Set();

  for (let i = 0; i < movieTimes.length; i++) {
    const firstMovie = movieTimes[i];
    const secondMovieSeen = flightTime - firstMovie;
    if (moviesSeen.has(secondMovieSeen)) {
      return true;
    }
    moviesSeen.add(firstMovie);
  }
  return false;
};
