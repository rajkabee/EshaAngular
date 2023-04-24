"use strict";
(() => {
    let num = 10;
    let res = sum(num);
    console.log("Sum: " + res);
    function sum(n) {
        if (n < 1) {
            return 0;
        }
        return n + sum(n - 1);
    }
})();
/*
sum(4)
4+sum(3)
4+3+sum(2)
4+3+2+sum(1)
4+3+2+1+sum(0)
4+3+2+1+0
10




*/ 
