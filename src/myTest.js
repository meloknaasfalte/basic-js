
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

        if (options['addition']) {
            if (options['additionRepeatTimes']) {

                count = options['additionRepeatTimes']
            }
            else
                count = 1

            while (count != 0) {
                console.log(`${String(options['addition'])}`);
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

const objWithSpecificCoercion = {
    [Symbol.toPrimitive]: hint => hint !== 'number' ? 'STRING_OR_DEFAULT' : 'NUMBER'
};

let resStr = repeater(objWithSpecificCoercion, { repeatTimes: 2, addition: objWithSpecificCoercion })
// let testObj = repeater('test', { repeatTimes: 2, , addition: 'R4DNdSC4cm', additionRepeatTimes: 1, additionSeparator: 'xdakNlYerD' })
console.log(resStr);



let test = 'STRING_OR_DEFAULTSTRING_OR_DEFAULT+STRING_OR_DEFAULTSTRING_OR_DEFAULT'
if (resStr === test)
    console.log(true);
else
    console.log(false);


let obj = {
    test: 1,
    aple: 1,
    orange: 1
}

let someStr = `${obj.test}`

// class DepthCalculator {

//     calculateDepth(arr) {
//         this.count = 1
//         this.depth = 1
//         for (let i = 0; i < arr.length; i++) {
//             if (Array.isArray(arr[i])) {
//                 this.depth++
//                 this.count++
//                 this.count += this.calculateDepth(arr[i]);
//             }
//         }
//         if (this.depth > this.count)
//             this.count = this.depth
//         return this.count;
//     }
// }

// let calculator = new DepthCalculator

// console.log(calculator.calculateDepth([1, 2, [], [[]]]));








