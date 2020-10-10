module.exports = (str) => {
  //first I want to check to split these words using a helper function
  const words = splitWord(str);

  const wordsToCount = new Map();

  const addWordsToCount = (word) => {
    if (wordsToCount.has(word)) {
      wordsToCount.set(word, wordsToCount.get(word) + 1);
    } else {
      wordsToCount.set(word, 1);
    }
  };

  for (let i = 0; i < words.length; i++) {
    addWordsToCount(words[i]);
  }
  return wordsToCount;
};

const isLetter = (letter) => {
  return (
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(letter) >= 0
  );
};

const splitWord = (inputStr) => {
  const words = [];
  let currentWordStartIndex = 0;
  let currentWordLength = 0;
  for (let i = 0; i <= inputStr.length; i++) {
    const character = inputStr[i];
    if (isLetter(character)) {
      if (currentWordLength === 0) {
        currentWordStartIndex = i;
      }
      currentWordLength += 1;
    } else {
      const word = inputStr.slice(
        currentWordStartIndex,
        currentWordStartIndex + currentWordLength
      );
      words.push(word);
      currentWordLength = 0;
    }
  }
  return words;
};
