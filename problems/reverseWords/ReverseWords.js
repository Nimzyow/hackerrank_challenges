module.exports = (message) => {
  //reverse all characters
  //find out where the word ends
  //reverse characters of word
  let firstIndex = 0;
  let lastIndex = message.length - 1;
  reverseMessage(message, firstIndex, lastIndex);
  for (let i = 0; i <= message.length; i++) {
    if (message[i] === " " || i === message.length) {
      lastIndex = i - 1;
      reverseMessage(message, firstIndex, lastIndex);
      firstIndex = i + 1;
    }
  }

  return message;
};

const reverseMessage = (message, firstIndex, lastIndex) => {
  while (firstIndex < lastIndex) {
    const tempFirstCharacter = message[firstIndex];

    message[firstIndex] = message[lastIndex];
    message[lastIndex] = tempFirstCharacter;

    firstIndex++;
    lastIndex--;
  }
};
