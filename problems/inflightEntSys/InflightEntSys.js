module.exports = (flightTime, filmTimes) => {
  let filmTimesIndex = 1;
  const timeLeft = flightTime - filmTimes[0];

  while (filmTimesIndex < filmTimes.length) {
    const filmFinishableInFlightTime = timeLeft - filmTimes[filmTimesIndex];
    if (filmFinishableInFlightTime === 0) {
      return true;
    }
    filmTimesIndex++;
  }
  return false;
};
