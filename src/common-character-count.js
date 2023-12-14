const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0
  let maxStr
  let minStr

  if (s1.length === Math.max(s1.length, s2.length)) {
    maxStr = s1
    minStr = s2
  } else {
    minStr = s1
    maxStr = s2
  }

  for (let i = 0; i < minStr.length; i++) {
    if (maxStr.includes(minStr[i])) {
      count++
      maxStr = maxStr.replace(minStr[i], '')
    }
  }

  return count
}

module.exports = {
  getCommonCharacterCount
};
