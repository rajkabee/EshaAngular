"use strict";
let a = 12;
a++;
++a;
console.log(a);
let b = a++; //post increment
console.log("b: ", b, ", a: ", a);
let c = ++b; //per increment
console.log("b: ", b, ", c: ", c);
//this is a single line comment
/*
this is multi line comment


Operators
    =   Assignment opereator
    let fname = "Esha";
    x=3+2;      valid
    3+2=x;      invalid
    x+y=5;      invalid

    Arithmetic Operators
    +
    -
    /
    *
    %       modulus     x=10%3;         x=>1
    x=3;

    Combination operator
    x=x+5;    ===     x+=5;     x=8;
    +=
    -=
    /=
    *=
    %=


    Unary Operators
    ++      unary increment operator
    --      unary decrement operator

    x=x+1;          x+=1;         x++;           ++x;
    x=x-1;          x-=1;         x--;           --x;

    Conditional Operator(output: true/false)
    ==      equals to operator
    <
    >
    <=
    >=
    !=


    Logical Operator
    OR      ||      short circuit OR
    AND     &&      short circuit AND
    XOR     ^       Exclusive OR
    NOT     !       complement


    A   B   A||B    A&&B    A^B
    0   0   0       0       0
    0   1   1       0       1
    1   0   1       0       1
    1   1   1       1       0

    A   !A
    0   1
    1   0

    bitwise operator
    1101
    left shift  1010
    rigth shift 0110
    complement  0010




*/ 
