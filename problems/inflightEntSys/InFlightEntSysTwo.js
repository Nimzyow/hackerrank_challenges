module.exports = (flightTime, movieTimes) => {
  const movieTimesSet = new Set();

  for (let i = 0; i < movieTimes.length; i++) {
    const firstMovieLength = movieTimes[i];
    const secondMovieLength = flightTime - firstMovieLength;
    if (movieTimesSet.has(secondMovieLength)) {
      return true;
    } else {
      movieTimesSet.add(movieTimes[i]);
    }
  }
  return false;
};
