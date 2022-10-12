const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  let sortArr = [];
  let res = "";

  if (!Array.isArray(arr))
    return false;

  arr.forEach(element => {
    if (typeof element === "string") {
      sortArr.push(element.trim());
    }
  })

  if (sortArr.length === 0)
    return false;

  sortArr.sort(function (a, b) {
    if (a[0].toUpperCase() === b[0].toUpperCase()) {
      return 0;
    }

    if (a[0].toUpperCase() > b[0].toUpperCase()) {
      return 1;
    }
    else
      return -1;
  })

  sortArr.forEach(element => {
    res += element[0].toUpperCase();
  })

  return res;
}

module.exports = {
  createDreamTeam
};
