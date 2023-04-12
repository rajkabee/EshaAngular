"use strict";
let ch = 'a';
let res = 0;
switch (ch) {
    case 'a':
        res = 97;
        break;
    case 'b':
        res = 98;
        break;
    case 'c':
        res = 99;
        break;
    default:
        res = 100;
}
console.log("Ascii Value: ", res);
