// module.exports = (str) => {
//   let palindrome = new Set();
//   for (let i = 0; i < str.length; i++) {
//     palindrome.add(str[i]);
//   }
//   const palindromeSetLength = palindrome.size;
//   const successfullPalindromeLength = str.length / 2;
//   if (str.length % 2 === 1) {
//     return palindromeSetLength === Math.round(successfullPalindromeLength)
//       ? true
//       : false;
//   }
//   return palindromeSetLength === successfullPalindromeLength ? true : false;
// };

//interview cake solution

module.exports = (str) => {
  let palindrome = new Set();

  for (const char of str) {
    if (palindrome.has(char)) {
      palindrome.delete(char);
    } else {
      palindrome.add(char);
    }
  }
  return palindrome.size <= 1;
};
