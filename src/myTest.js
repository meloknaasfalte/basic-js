
function repeater(str, options) {
    let res = ""

    // if (!options['separator'])
    //     if (!options['separator']) {
    //         options['separator'] = '+';
    //     }
    // if (!options['additionSeparator']) {
    //     options['additionSeparator'] = '|';
    // }
    console.log(options['repeatTimes']);
    while (options['repeatTimes'] != 0) {
        res += `${str.toString()}`
        options['repeatTimes']--


        if (options['addition']) {
            let count = options['additionRepeatTimes']
            while (count != 0) {

                res += `${options['addition'].toString()}`
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

let resStr = repeater(repeater('аГуСиК ', { repeatTimes: 3, separator: '♥♥♥  ', addition: ' пОкАкУнЬкАл ', additionRepeatTimes: 5, additionSeparator: '( ͡° ͜ʖ ͡°)' }))
console.log(resStr);
// let testObj = repeater('test', { repeatTimes: 2, , addition: 'R4DNdSC4cm', additionRepeatTimes: 1, additionSeparator: 'xdakNlYerD' })


let test = 'аГуСиК  пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ♥♥♥  аГуСиК  пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ♥♥♥  аГуСиК  пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл '
if (resStr === test)
    console.log(true);
else
    console.log(false);
// console.log(repeater('NtXzB8rjNX', { repeatTimes: 6, separator: 'QCe2UgFvRH', addition: 'R4DNdSC4cm', additionRepeatTimes: 1, additionSeparator: 'xdakNlYerD' }), 'after transform')


let obj = {
    test: 1,
    aple: 1,
    orange: 1
}








