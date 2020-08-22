//Write an efficient function that checks whether any
//permutation ↴ of an input string is a palindrome.
module.exports = (str) => {
  const palindrome = new Set();

  for (const char of str) {
    if (palindrome.has(char)) {
      palindrome.delete(char);
    } else {
      palindrome.add(char);
    }
  }

  return palindrome.size <= 1;
};
