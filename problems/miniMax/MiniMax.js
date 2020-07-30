module.exports = (arr) => {
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
