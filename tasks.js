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

