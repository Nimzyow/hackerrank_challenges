module.exports = (message) => {
  //reverse all characters to put words in correct place
  let firstIndex = 0;
  let lastIndex = message.length - 1;
  reverseCharacters(message, firstIndex, lastIndex);
  for (let i = 0; i <= message.length; i++) {
    if (message[i] === " " || i === message.length) {
      lastIndex = i - 1;
      reverseCharacters(message, firstIndex, lastIndex);
      firstIndex = i + 1;
    }
  }
  return message;
};

const reverseCharacters = (message, firstIndex, lastIndex) => {
  const loopTimes = lastIndex - firstIndex;
  for (let i = 0; i < loopTimes / 2; i++) {
    const tempFirstChar = message[firstIndex];
    message[firstIndex] = message[lastIndex];
    message[lastIndex] = tempFirstChar;
    firstIndex++;
    lastIndex--;
  }
  return message;
};
