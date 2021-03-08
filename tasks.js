/*
function disemvowel(str) {
    let arr = ['a', 'e', 'i', 'o', 'u'];
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if (!arr.includes(str[i].toLowerCase())) {
            newStr = newStr + str[i];
        }
    }
    return newStr;
}
*/
/////////////////
/*
function accum(s) {
    let newStr = '';
    for (let i = 0; i < s.length; i++) {
        newStr = newStr + s[i].toUpperCase();
        for (let j = 0; j < i; j++) {
            newStr = newStr + s[i].toLowerCase();
        }
        newStr = newStr + '-';
    }
    if (newStr[newStr.length - 1] == '-') {
        newStr = newStr.substr(0, newStr.length - 1);
    }
    return newStr;
}
//accum("abcd") -> "A-Bb-Ccc-Dddd"
function accum(s) {
    let newStr = [];
    for (let i = 0; i < s.length; i++) {
        newStr.push(s[i].toUpperCase());
        for (let j = 0; j < i; j++) {
            newStr.push(s[i].toLowerCase());
        }
    }
    return newStr.join('-');
}
*/
/////////////////
//highAndLow("1 2 3 4 5");  // return "5 1"
/*
function highAndLow(numbers) {
    let arr = numbers.split(' ');
    let min = Math.min.apply(null, arr);
    let max = Math.max.apply(null, arr);
    return max + ' ' + min;
}
*/
/////////////////
//isIsogram("Dermatoglyphics") == true
//isIsogram("aba") == false
//isIsogram("moOse") == false // -- ignore letter case
/*
function isIsogram(str) {
    let lowerStr = str.toLowerCase();
    let check = 0;
    for (let i = 0; i < lowerStr.length; i++) {
        newStr = lowerStr.slice(i + 1);
        if (newStr.includes(lowerStr[i])) {
            check += 1;
        }
    }
    return (check > 0) ? false : true;
}
*/
///////////////////
/*
function calc(x) {
    let total1 = '';
    for (let i = 0; i < x.length; i++) {
        total1 += x.charCodeAt(i);
    }

    let total2 = '';
    for (let i = 0; i < total1.length; i++) {
        if (total1[i] == '7') {
            total2 += '1';
        } else {
            total2 += total1[i];
        }
    }

    let total1Sum = 0;
    for (let i = 0; i < total1.length; i++) {
        total1Sum += Number(total1[i]);
    }

    let total2Sum = 0;
    for (let i = 0; i < total2.length; i++) {
        total2Sum += Number(total2[i]);
    }

    return total1Sum - total2Sum;
}
*/
//////////////////////