"use strict";
(() => {
    let num = 153;
    let arms = armstrong(num);
    if (arms) {
        console.log("Armstrong Number...");
    }
    else {
        console.log("not an Armstrong Number");
    }
})();
function armstrong(n) {
    let temp = n;
    let d = digits(n);
    //console.log(d);
    let rem;
    let armv = 0;
    while (n > 0) {
        rem = n % 10;
        armv += pow(rem, d);
        n = Math.floor(n / 10);
    }
    if (armv == temp) {
        return true;
    }
    return false;
}
function digits(n) {
    let count = 0;
    while (n > 0) {
        n = Math.floor(n / 10);
        count++;
    }
    return count;
}
function pow(b, p) {
    let res = 1;
    while (p > 0) {
        res *= b;
        p--;
    }
    return res;
}
