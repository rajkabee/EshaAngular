"use strict";
let age = 64;
let msg = "";
//syntax of ternery operator
//result = con?if_true:if_false;
msg = age < 18 ? "You are a minor!" : "You are an adult!";
//msg=age<18?"You are a minor!":age<60?"You are an adult!":"Senior Citizen!";
// if(age<=18){
//     msg = "You are a minor!";
// }
// else if(age<60){
//     msg = "You are an adult!";
// }
// else{
//     msg = "Senior Citizen!"
// }
console.log(msg);
// x++;
// ++x;
// x--;
// --x;
// console.log(x);
// let y = ++x;
// console.log("y=",y);
// console.log("x=",x);
/*
Operators
    =       -> assignment operator
    Arithmetic Operators
        general
        +   add
        -   subtract
        /   divide
        *   multiply
        %   modulus -Remainder

        let x = 34;
        x = 56+34-3;
        87 = x;             XXX
        x = 10%3;           x=>1
        combination
            x = x+5;        x+=5;
            +=
            -=
            /=
            *=
            %=
        unary
        x =x+1;         x+=1;           x++;    ++x;
        x=x-1;          x-=1;           x--;    --x;
    Conditional operators (o/p always true or false)
        ==      equalsto
        ===     equivalent
        <      less than
        >       greater than
        <=      less than or equals to
        >=      greater than or equals to
        !=      not equals to

    
    Logical Operators
       OR       ||
       AND      &&
       XOR      ^^
       NOT      !

       A    B   A||B    A&&B    A^^B
       0    0   0       0       0
       0    1   1       0       1
       1    0   1       0       1
       1    1   1       1       0

       A    !A
       0    1
       1    0

    Bitwise Operators

    00001010    ->10
    00001011    ->11
and 00001010    ->10&11
or  00001011    ->10|11
not 11110101    ->!10
    <<  left shift
    >>  right Shift
    00010100    <<10
    00000101    >>10

    27-17
    00010001
    11101110    +1
    11101111
and 00011011
    00001010
*/ 
