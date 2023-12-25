// Meet me in the park at eleven am

const str = 'Meet me in the park at eleven am';

console.log(str.replace(/ /gi, '').length);


class VigenereCipheringMachine {

    constructor(isReverse) {
        this.isReverse = true
        if (isReverse === false) {
            this.isReverse = false;
        }
    }

    getKey(str, key) {
        let keyArr = [];
        keyArr = key.split("");
        if (str.length == keyArr.length)
            return keyArr.join("");

        const keyArrLength = keyArr.length;
        for (let i = 0; i < (str.length - keyArrLength); i++) {

            keyArr.push(keyArr[i % ((keyArr).length)])
        }

        return keyArr.join("");
    }

    encrypt(str, key) {
        if (!str || !key) {
            console.log(str, key);
            throw new Error(false);
        }
        let res = "";
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let keyStr = this.getKey(str, key);
        let j = 0;
        for (let i = 0; i < str.length; i += 1) {
            if (alphabet.includes(str[i].toUpperCase())) {
                const x = (alphabet.indexOf(str[i].toUpperCase()) +
                    alphabet.indexOf(keyStr[j].toUpperCase())) % 26;
                res += alphabet[x];
                j += 1;
                continue;
            }
            res += str[i];
        }
        if (this.isReverse) {
            return res;
        }
        return res.split('').reverse().join('');
    }

    decrypt(str, key) {
        if (!str || !key) {
            throw new Error(false);
        }
        let res = "";
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let keyStr = this.getKey(str, key);
        let j = 0;
        for (let i = 0; i < str.length; i += 1) {
            if (alphabet.includes(str[i].toUpperCase())) {
                const x = (alphabet.indexOf(str[i].toUpperCase()) -
                    alphabet.indexOf(keyStr[j].toUpperCase()) + 26) % 26;
                res += alphabet[x];
                j += 1;
                continue;
            }
            res += str[i];
        }
        if (this.isReverse) {
            return res;
        }
        return res.split('').reverse().join('');
    }
}

const machine = new VigenereCipheringMachine();
const reverseMachine = new VigenereCipheringMachine(false);

// console.log(machine.encrypt(undefined, undefined));

// e = 5; l = 12; t = 20

console.log(undefined.valuef());

