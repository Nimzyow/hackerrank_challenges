module.exports = (takeOut, dineIn, servedOrders) => {
  let takeOutIndex = 0;
  let dineInIndex = 0;
  let servedOrdersIndex = 0;
  while (servedOrdersIndex < servedOrders.length) {
    if (
      takeOutIndex < takeOut.length &&
      takeOut[takeOutIndex] === servedOrders[servedOrdersIndex]
    ) {
      takeOutIndex++;
      servedOrdersIndex++;
    } else if (
      dineInIndex < dineIn.length &&
      dineIn[dineInIndex] === servedOrders[servedOrdersIndex]
    ) {
      dineInIndex++;
      servedOrdersIndex++;
    } else {
      return false;
    }
  }
  return true;
};
