"use strict";
(() => {
    //fibonacci series
    //0,1,1,2,3,5,8,13,21,34,55,89.....
    let n1 = 0, n2 = 1, n3;
    let range = 100;
    while (n1 <= range) {
        console.log(n1);
        n3 = n1 + n2;
        n1 = n2;
        n2 = n3;
    }
})();
/*
28
1,2,4,7,14

*/ 
