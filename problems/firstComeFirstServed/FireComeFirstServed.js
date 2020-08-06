module.exports = (takeOutOrder, dineInOrder, ServedOrders) => {
  let mergedAllOrders = [];
  let mergedAllOrdersIndex = 0;
  takeOutOrder.map((e) => {
    mergedAllOrders[mergedAllOrders.length] = e;
  });
  dineInOrder.map((e) => {
    mergedAllOrders[mergedAllOrders.length] = e;
  });

  while (mergedAllOrdersIndex < mergedAllOrders.length) {
    const firstOrderIndex = ServedOrders.findIndex(
      (e) => e === mergedAllOrders[mergedAllOrdersIndex],
    );
    const secondOrderIndex = ServedOrders.findIndex(
      (e) => e === mergedAllOrders[mergedAllOrdersIndex + 1],
    );

    if (firstOrderIndex === -1 || secondOrderIndex === -1) {
      return "First come first served";
    }

    if (firstOrderIndex > secondOrderIndex) {
      return "NOT First come first served";
    }
    mergedAllOrdersIndex++;
  }
};
