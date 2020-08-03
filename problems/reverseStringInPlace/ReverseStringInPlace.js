module.exports = (str) => {
  let leftIndex = 0;
  let rightIndex = str.length - 1;

  while (leftIndex < rightIndex) {
    let tempLeftCharacter = str[leftIndex];
    str[leftIndex] = str[rightIndex];

    str[rightIndex] = tempLeftCharacter;
    leftIndex++;
    rightIndex--;
  }
  return str;
};
