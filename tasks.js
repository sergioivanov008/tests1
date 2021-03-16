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

//work only 3 fields
/*
function catMouse(map, moves) {
    let positionCat = map.indexOf('C');
    let positionMouse = map.indexOf('m');
    let catField = 0;
    let mouseField = 0;

    if (positionCat == -1 || positionMouse == -1) {
        return 'boring without two animals';
    }

    if (positionCat < 10) {
        positionCat = positionCat + 1;
        catField = 1;
    } else if (positionCat >= 10 && positionCat < 19) {
        positionCat = positionCat - 9;
        catField = 2;
    } else if (positionCat >= 19) {
        positionCat = positionCat - 19;
        catField = 3;
    }

    if (positionMouse < 10) {
        positionMouse = positionMouse + 1;
        mouseField = 1;
    } else if (positionMouse >= 10 && positionMouse < 19) {
        positionMouse = positionMouse - 9;
        mouseField = 2;
    } else if (positionMouse >= 19) {
        positionMouse = positionMouse - 19;
        mouseField = 3;
    }

    let difference = Math.abs(catField - mouseField);
    let step = Math.abs(positionCat - positionMouse);
    switch (difference) {
        case 0:
            return (step >= moves) ? 'Caught!' : 'Escaped!';
        case 1:
            return ((step + 1) <= moves) ? 'Caught!' : 'Escaped!';
        case 2:
            return ((step + 2) <= moves) ? 'Caught!' : 'Escaped!';
    }
}
console.log('cat: ' + positionCat + ', cat on field: ' + catField + ', mouse: ' + positionMouse + ', mouse on field: ' + mouseField + ', difference: ' + difference);
*/
/*
describe("Basic Tests", function () {
    it("It should works for basic tests", function () {
        var map =
            `..C......
  .........
  ....m....`
        Test.assertSimilar(catMouse(map, 5), 'Caught!')

        map =
            `.C.......
  .........
  ......m..`
        Test.assertSimilar(catMouse(map, 5), 'Escaped!')

        map =
            `..C......
  .........
  .........`
        Test.assertSimilar(catMouse(map, 5), 'boring without two animals')
    });
});

function catMouse(map, moves) {
    let fieldLength = map.indexOf('\n') + 1;
    let positionCat = map.indexOf('C');
    let positionMouse = map.indexOf('m');

    if (positionCat == -1 || positionMouse == -1) {
        return 'boring without two animals';
    }

    let catField = Math.trunc(positionCat / fieldLength);
    let mouseField = Math.trunc(positionMouse / fieldLength);

    let positionCatField = positionCat - (catField * fieldLength);
    let positionMouseField = positionMouse - (mouseField * fieldLength);

    let catStepToMouseField = Math.abs(catField - mouseField);

    let step = Math.abs(positionCatField - positionMouseField) + catStepToMouseField;

    return (step <= moves) ? 'Caught!' : 'Escaped!';
}

console.log('cat: ' + positionCat + ' , cat on field: ' + catField + ', mouse: ' + positionMouse + ', mouse on field: ' + mouseField + ', difference: ' + difference);

console.log('cat: ' + positionCat + ', cat on field: ' + catField + ', positionCatField: ' + positionCatField +
    ', mouse: ' + positionMouse + ', mouse on field: ' + mouseField + ', positionMouseField: ' + positionMouseField +
    ', length of field: ' + fieldLength + ', field Quantity: ' + fieldQuantity);

console.log('cat: ' + positionCat + ', cat field: ' + catField + ', positionCatField: ' + positionCatField +
    ', mouse: ' + positionMouse + ', mouse field: ' + mouseField + ', positionMouseField: ' + positionMouseField);

console.log('fieldLength: ' + fieldLength + ', positionCat: ' + positionCat + ', catField: ' + catField + ', positionCatField: ' + positionCatField +
    ', positionMouse: ' + positionMouse + ', mouseField: ' + mouseField + ', positionMouseField: ' + positionMouseField +
    ', catStepToMouseField: ' + catStepToMouseField + ', step: ' + step);
*/
////////////////////
/*
function duplicateEncode(word) {
    let upWord = word.toUpperCase();
    let arr = [];
    let stringRest = '';
    for (let i = 0; i < upWord.length; i++) {
        let letter = upWord[i];
        stringRest = upWord.slice(0, i) + upWord.slice(i + 1);

        if (stringRest.includes(letter)) {
            arr.push(')');
        } else {
            arr.push('(');
        }
    }
    return arr.join('');
}

console.log('letter: ' + letter + ' , stringRest: ' + stringRest);

duplicateEncode("din");//,"(((");
duplicateEncode("recede");//,"()()()");
duplicateEncode("Success");//,")())())","should ignore case");
duplicateEncode("(( @");//,"))((");
*/
///////////////////////
/*
function squares(x, n) {
    let arr = [];
    if (n <= 0) {
        return arr;
    }
    arr.push(x);
    for (let i = 1; i < n; i++) {
        x = x * x;
        arr.push(x);
    }

    return arr;
}

squares(2, 5)//, [2, 4, 16, 256, 65536]);
*/
////////////////////////
/*
function checkConcatenatedSum(x, n) {
    let strNum = String(Math.abs(x));
    let sum = 0;
    for (let i = 0; i < strNum.length; i++) {
        sum += Number(strNum[i].repeat(n));
    }

    if (x > 0) {
        return (x == sum) ? true : false;
    } else {
        return (x == -sum) ? true : false;
    }
}

checkConcatenatedSum(2997, 3);//,true)
checkConcatenatedSum(-2997, 3);//,true)
*/
/////////////////////////
/*
function FilterString(value) {
    let strNum = '0123456789';
    let str = '';
    for (let i = 0; i < value.length; i++) {
        if (strNum.indexOf(value[i]) != -1) {
            str = str + value[i];
        }
    }
    return Number(str);
}

FilterString("123")//, 123, 'Just return the numbers');
FilterString("a1b2c3")//, 123, 'Just return the numbers');
FilterString("aa1bb2cc3dd")//, 123, 'Just return the numbers');
*/
/////////////////////////
/*
function nthFibo(n) {
    let numPrev = 0;
    let numNext = 1;
    for (let i = 1; i < n; i++) {
        numPrev = numNext - numPrev;
        numNext = numNext + numPrev;
    }
    return numPrev;
}

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711,

nthFibo(1)//, 0, "1-st Fibo");
nthFibo(2)//, 1, "2-nd Fibo");
nthFibo(3)//, 1, "3-rd Fibo");
nthFibo(4)//, 2, "4-th Fibo");
*/
//////////////////////////
/*
function divCon(x) {
    let numNum = 0;
    let numStr = 0;
    for (let i = 0; i < x.length; i++) {
        if (typeof (x[i]) === 'number') {
            numNum += x[i];
        } else {
            numStr += Number(x[i]);
        }
    }
    return numNum - numStr;
}

divCon([9, 3, '7', '3']);//, 2);
divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]);//, 14);
divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']);//, 13);
*/
//////////////////////////////
/*
function findOdd(A) {
    let uniqArr = Array.from(new Set(A));
    for (let i = 0; i < uniqArr.length; i++) {
        let num = 0;
        for (let j = 0; j < A.length; j++) {
            if (A[j] == uniqArr[i]) {
                num += 1;
            }
        }
        if (num % 2 != 0) {
            return uniqArr[i];
        }
    }
}

findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]);//, 5);
findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]);//, -1);
findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]);//, 5);
findOdd([10]);//, 10);
findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]);//, 10);
findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]);//, 1);
*/
/////////////////////////////////
/*
function findOutlier(integers) {
    let odd = 0;
    let even = 0;

    (integers[0] % 2 == 0) ? even += 1 : odd += 1;
    (integers[1] % 2 == 0) ? even += 1 : odd += 1;
    (integers[2] % 2 == 0) ? even += 1 : odd += 1;

    let oddOrEven = 0;
    (odd > even) ? oddOrEven = 0 : oddOrEven = 1;

    for (let i = 0; i < integers.length; i++) {
        if (oddOrEven == 0) {
            if (integers[i] % 2 == 0) {
                return integers[i];
            }
        } else {
            if (integers[i] % 2 != 0) {
                return integers[i];
            }
        }
    }
}
*/
/////////////////////////////////
/*
function zipWith(fn, a0, a1) {
    let newArr = [];
    for (let i = 0; i < a0.length; i++) {
        if (a0[i] != undefined && a1[i] != undefined) {
            newArr.push(fn(a0[i], a1[i]));
        }
    }
    return newArr;
}


zipWith(plus, [0, 1, 2, 3, 4, 5], [6, 5, 4, 3, 2, 1]);//, [6,6,6,6,6,6]);
zipWith(plus, [0, 1, 2, 3, 4], [6, 5, 4, 3, 2, 1]);//, [6,6,6,6,6  ]);
zipWith(plus, [0, 1, 2, 3, 4, 5], [6, 5, 4, 3, 2]);//, [6,6,6,6,6  ]);
zipWith(Math.pow, [10, 10, 10, 10], [0, 1, 2, 3]);//, [1,10,100,1000]);
zipWith(Math.max, [1, 4, 7, 1, 4, 7], [4, 7, 1, 4, 7, 1]);//, [4,7,7,4,7,7]);
zipWith(function (a, b) { return a + b; }, [0, 1, 2, 3], [0, 1, 2, 3]);//, [0,2,4,6]);
zipWith((a, b) => a + b, [0, 1, 2, 3], [0, 1, 2, 3]);//, [0,2,4,6]);
*/
///////////////////////////
/*
function starSign(date) {
    let month = date.getMonth() + 1;
    let day = date.getDate();
    if ((month == 1 && day > 20) || (month == 2 && day < 20)) {
        return 'Aquarius';
    } else if ((month == 2 && day > 19) || (month == 3 && day < 21)) {
        return 'Pisces';
    } else if ((month == 3 && day > 20) || (month == 4 && day < 21)) {
        return 'Aries';
    } else if ((month == 4 && day > 20) || (month == 5 && day < 22)) {
        return 'Taurus';
    } else if ((month == 5 && day > 21) || (month == 6 && day < 22)) {
        return 'Gemini';
    } else if ((month == 6 && day > 21) || (month == 7 && day < 23)) {
        return 'Cancer';
    } else if ((month == 7 && day > 22) || (month == 8 && day < 24)) {
        return 'Leo';
    } else if ((month == 8 && day > 23) || (month == 9 && day < 24)) {
        return 'Virgo';
    } else if ((month == 9 && day > 23) || (month == 10 && day < 24)) {
        return 'Libra';
    } else if ((month == 10 && day > 23) || (month == 11 && day < 23)) {
        return 'Scorpio';
    } else if ((month == 11 && day > 22) || (month == 12 && day < 22)) {
        return 'Sagittarius';
    } else if ((month == 12 && day > 21) || (month == 1 && day < 21)) {
        return 'Capricorn';
    }
}


// starSign(new Date(1970, 5, 5));//, 'Gemini');
// starSign(new Date(2000, 1, 15));//, 'Aquarius');
// starSign(new Date(1987, 7, 23));//, 'Leo');

//Aquarius------21 January - 19 February
//Pisces--------- 20 February - 20 March
//Aries----------21 March - 20 April
//Taurus--------21 April - 21 May
//Gemini--------22 May - 21 June
//Cancer--------22 June - 22 July
//Leo------------- 23 July - 23 August
//Virgo----------- 24 August - 23 September
//Libra----------- 24 September - 23 October
//Scorpio--------24 October - 22 November
//Sagittarius----23 November - 21 December
//Capricorn----- 22 December - 20 January

*/
/////////////////
