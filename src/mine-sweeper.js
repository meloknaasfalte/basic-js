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

// function checkMatrix (matrix, current) {

// }
function minesweeper(matrix) {

  let count = 0
  let resMatrix = []


  for (let i = 0; i < matrix.length; i++) {
    let rowArr = []
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === true) {
        rowArr.push(1)
        continue;
      }

      if (i - 1 in matrix && j in matrix) {
        if (matrix[i - 1][j] === true) {
          if (j === 2)
            console.log(i, j, 1);
          count++
        }

      }
      if (i - 1 in matrix && j - 1 in matrix) {
        if (matrix[i - 1][j - 1] === true) {
          if (j === 2 && i === 0)
            console.log(i, j, 2);
          count++
        }

      }
      if (i - 1 in matrix && j + 1 in matrix) {
        if (matrix[i - 1][j + 1] === true) {
          if (j === 2 && i === 0)
            console.log(i, j, 3);
          count++
        }

      }
      if (i in matrix && j - 1 in matrix) {
        if (matrix[i][j - 1] === true) {
          if (j === 2 && i === 0)
            console.log(i, j, 4);
          count++
        }

      }
      if (i in matrix && j + 1 in matrix) {
        if (matrix[i][j + 1] === true) {
          if (j === 2 && i === 0)
            console.log(i, j, 5);
          count++
        }

      }

      if (i + 1 in matrix && j in matrix) {
        if (matrix[i + 1][j] === true) {
          if (j === 2 && i === 0)
            console.log(i, j, 6);
          count++
        }

      }

      if (i + 1 in matrix && j - 1 in matrix) {
        if (matrix[i + 1][j - 1] === true) {
          if (j === 2 && i === 0)
            console.log(i, j, 7);
          count++
        }

      }

      if (i + 1 in matrix && j + 1 in matrix) {
        if (matrix[i + 1][j - 1] === true) {
          if (j === 2 && i === 0)
            console.log(i, j, 8);
          count++
        }

      }
      rowArr.push(count)
      count = 0
    }
    resMatrix.push(rowArr)
    rowArr = []
  }
  return resMatrix
}



module.exports = {
  minesweeper
};
