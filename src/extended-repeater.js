const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let res = ""
  let count = 0
  if (!options['separator'])
    if (!options['separator']) {
      options['separator'] = '+';
    }
  if (!options['additionSeparator']) {
    options['additionSeparator'] = '|';
  }

  if (!options['repeatTimes']) {
    options['repeatTimes'] = 1
  }
  while (options['repeatTimes'] != 0) {
    res += `${String(str)}`
    options['repeatTimes']--

    if (options['addition'] || String(options['addition']) === 'false' || String(options['addition']) === 'null') {
      if (options['additionRepeatTimes']) {

        count = options['additionRepeatTimes']
      }
      else
        count = 1

      while (count != 0) {
        res += `${String(options['addition'])}`
        if (count != 1) {
          if (options['additionSeparator'])
            res += `${options['additionSeparator']}`
        }
        count--
      }
      count = options['additionRepeatTimes']
    }
    if (options['repeatTimes'] != 0)
      res += options['separator']
  }
  return res
}

module.exports = {
  repeater
};
