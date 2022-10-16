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
  throw new error('error')
  //   let res = ""
  //   if (!options['separator']) {
  //     options['separator'] = '+';
  //   }
  //   if (!options['additionSeparator'] || options['additionSeparator'] === 0) {
  //     options['additionSeparator'] = '|';
  //   }

  //   while (options['repeatTimes'] != 0) {
  //     res += `${str.toString()}`
  //     options['repeatTimes']--

  //     if (options['addition']) {
  //       let count = options['additionRepeatTimes']
  //       while (count != 0) {

  //         res += `${options['addition'].toString()}`
  //         if (count != 1) {
  //           if (options['additionSeparator'])
  //             res += `${options['additionSeparator']}`
  //         }
  //         count--
  //       }
  //       count = options['additionRepeatTimes']
  //     }
  //     if (options['repeatTimes'] != 0)
  //       res += options['separator']
  //   }
  //   return res
}

module.exports = {
  repeater
};
