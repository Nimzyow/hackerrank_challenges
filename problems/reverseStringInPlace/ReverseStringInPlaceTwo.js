module.exports = (toReverse) => {
    let firstIndex = 0;
    let lastIndex = toReverse.length - 1;

    while (firstIndex < lastIndex) {
        const firstLetter = toReverse[firstIndex];
        toReverse[firstIndex] = toReverse[lastIndex];
        toReverse[lastIndex] = firstLetter;
        firstIndex++
        lastIndex--
    }
    return toReverse
}