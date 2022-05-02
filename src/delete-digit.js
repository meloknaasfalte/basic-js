const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {

  let res = 0;
  let m = String(n).split("");

  if(m.length < 3){
    let i = 0;
    m[i] > m[i + 1] ? m.splice((i + 1), 1) : m.splice((i), 1);
    return Number(m.join(''));
  }

  for (let i = 0; i < m.length; i++) {
    
    if(m[i] < m[i + 1]) 
      m.splice(i, 1);
  }
  
  return Number(m.join(''));
}

module.exports = {
  deleteDigit
};
