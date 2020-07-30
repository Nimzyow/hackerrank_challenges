module.exports = (ar) => {
  let max = Math.max(...ar);
  return ar.filter((n) => n === max).length;
};
