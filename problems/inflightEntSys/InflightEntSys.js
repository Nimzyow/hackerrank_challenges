module.exports = (flightTime, filmTimes) => {
  let filmTimesIndex = 0;
  let filmToCompareTo = 0;

  while (
    filmTimesIndex < filmTimes.length &&
    filmToCompareTo < filmTimes.length
  ) {
    let timeLeft = flightTime - filmTimes[filmToCompareTo];
    const filmFinishableInFlightTime = timeLeft - filmTimes[filmTimesIndex];
    if (filmToCompareTo === filmTimesIndex) {
      filmTimesIndex++;
    } else if (filmFinishableInFlightTime === 0) {
      return true;
    } else {
      filmTimesIndex++;
    }
    if (filmTimesIndex === filmTimes.length) {
      filmToCompareTo++;
      filmTimesIndex = 0;
    }
  }
  return false;
};
