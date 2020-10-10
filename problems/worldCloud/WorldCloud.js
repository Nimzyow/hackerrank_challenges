module.exports = (str) => {
    //first I want to check to split these words using a helper function
    const splitWords = splitWordsHelper(str);
    let mappedWords = new Map();

    for (let i = 0; i < splitWords.length; i++) {
        if (mappedWords.has(splitWords[i])) {
            mappedWords.set(splitWords[i], mappedWords.get(splitWords[i])++);
        } else {
            mappedWords.set(splitWords[i], 1);
        }
    }
    console.log("mapped words", mappedWords);
};

const splitWordsHelper = (str) => {
    let wordsSplit = [];
    let firstIndex = 0;
    let lastIndex = 0;
    for (let i = 0; i <= str.length; i++) {
        if (str[i] === " ") {
            lastIndex = i;
            const wordSplit = splitWord(str, firstIndex, lastIndex);
            wordsSplit.push(wordSplit);
            firstIndex = i + 1;
        } else if (i === str.length) {
            lastIndex = i;
            const wordSplit = splitWord(str, firstIndex, lastIndex);
            wordsSplit.push(wordSplit);
        }
    }
    return wordsSplit;
};

const splitWord = (str, firstIndex, lastIndex) => {
    return str.slice(firstIndex, lastIndex);
};
