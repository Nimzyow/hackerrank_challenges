module.exports = (myArray, anotherArray) => {
  let mergedArray = [];
  let myArrayIndex = 0;
  let anotherArrayIndex = 0;
  let currentIndexMerged = 0;

  while (currentIndexMerged < myArray.length + anotherArray.length) {
    const firstUnmergedMyArray = myArray[myArrayIndex];
    const firstUnmergedAnotherArray = anotherArray[anotherArrayIndex];

    if (myArrayIndex >= myArray.length) {
      mergedArray[currentIndexMerged] = anotherArray[anotherArrayIndex];
      anotherArrayIndex++;
    } else if (anotherArrayIndex >= anotherArray.length) {
      mergedArray[currentIndexMerged] = myArray[myArrayIndex];
      myArrayIndex++;
    } else if (firstUnmergedMyArray < firstUnmergedAnotherArray) {
      mergedArray[currentIndexMerged] = firstUnmergedMyArray;
      myArrayIndex++;
    } else {
      mergedArray[currentIndexMerged] = firstUnmergedAnotherArray;
      anotherArrayIndex++;
    }
    currentIndexMerged++;
  }

  return mergedArray;

  // const mergeArray = myArray.concat(anotherArray);

  // return mergeArray.sort((a, b) => a - b);
};
