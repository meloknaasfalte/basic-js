const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!")
  let newArr = arr.slice(0);


  let discardPrev = (newArr, index) => {
    if (newArr[index - 1] !== undefined) {
      newArr.splice(index - 1, 2)
    }
    else (
      newArr.splice(index, 1)
    )
    return newArr;
  }

  let discardNext = (newArr, index) => {
    if (newArr[index + 1] !== undefined) {
      if (typeof newArr[index + 2] === 'string')
        newArr.splice(index, 3)
      else
        newArr.splice(index, 2)
    }
    else
      newArr.splice(index, 1)
    return newArr;
  }


  let doubleNext = (newArr, index) => {
    if (newArr[index + 1] !== undefined)
      newArr.splice(index, 1, newArr[index + 1])
    else
      newArr.splice(index, 1)
    return newArr;
  }

  let doublePrev = (newArr, index) => {
    if (newArr[index - 1] !== undefined) {
      newArr.splice(index, 1, newArr[index - 1])
    }
    else
      newArr.splice(index, 1)
    return newArr;
  }

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === '--discard-prev')
      newArr = discardPrev(newArr, i)
    if (newArr[i] === '--discard-next')
      newArr = discardNext(newArr, i)
    if (newArr[i] === '--double-next')
      newArr = doubleNext(newArr, i)
    if (newArr[i] === '--double-prev')
      newArr = doublePrev(newArr, i)
  }
  return newArr;

}

module.exports = {
  transform
};
