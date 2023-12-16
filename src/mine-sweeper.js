const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  resultArr = []
  matrix.forEach((elem, globalKey) => {
    resultArr.push(elem.map((elem, key) => {
      let counter = 0

      if (matrix[globalKey - 1]) {
        if (matrix[globalKey - 1][key - 1] === true) counter++
        if (matrix[globalKey - 1][key] === true) counter++
        if (matrix[globalKey - 1][key + 1] === true) counter++
      }

      if (matrix[globalKey][key - 1] === true) counter++
      if (matrix[globalKey][key + 1] === true) counter++
      
      if (matrix[globalKey + 1]) {
        if (matrix[globalKey + 1][key - 1] === true) counter++
        if (matrix[globalKey + 1][key] === true) counter++
        if (matrix[globalKey + 1][key + 1] === true) counter++
      }

      return counter
    }))
  })

  return resultArr
}

module.exports = {
  minesweeper
};
