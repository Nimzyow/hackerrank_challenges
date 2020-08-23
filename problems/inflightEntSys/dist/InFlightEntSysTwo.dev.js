"use strict";

module.exports = function (flightTime, movieTimes) {
  var movieTimesSet = new Set();

  for (var i = 0; i < movieTimes.length; i++) {
    var firstMovieLength = movieTimes[i];
    var secondMovieLength = flightTime - firstMovieLength;

    if (movieTimesSet.has(secondMovieLength)) {
      return true;
    } else {
      movieTimesSet.add(movieTimes[i]);
    }
  }

  return false;
};