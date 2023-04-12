"use strict";
(() => {
    let i, j;
    let text;
    console.log("Rectangle:");
    for (i = 0; i < 5; i++) {
        text = "";
        for (j = 0; j < 5; j++) {
            text += "*  ";
        }
        console.log(text);
    }
    console.log("Triangle 1:");
    for (i = 0; i < 5; i++) {
        text = "";
        for (j = i; j < 5; j++) {
            text += "*  ";
        }
        console.log(text);
    }
    console.log("Triangle 2:");
    for (i = 0; i < 5; i++) {
        text = "";
        for (j = 0; j <= i; j++) {
            text += "*  ";
        }
        console.log(text);
    }
    console.log("Triangle 3:");
    for (i = 0; i < 5; i++) {
        text = "";
        for (j = i; j < 4; j++) {
            text += "   ";
        }
        for (j = 0; j <= i; j++) {
            text += "*  ";
        }
        console.log(text);
    }
    console.log("Triangle 4:");
    for (i = 0; i < 5; i++) {
        text = "";
        for (j = 0; j < i; j++) {
            text += "   ";
        }
        for (j = i; j < 5; j++) {
            text += "*  ";
        }
        console.log(text);
    }
    console.log("Pyramid:");
    for (i = 0; i < 5; i++) {
        text = "";
        for (j = i; j < 4; j++) {
            text += "   ";
        }
        for (j = 0; j <= i; j++) {
            text += "*  ";
        }
        for (j = 0; j < i; j++) {
            text += "*  ";
        }
        console.log(text);
    }
    console.log("Diamond:");
    for (i = 0; i < 5; i++) {
        text = "";
        for (j = i; j < 4; j++) {
            text += "   ";
        }
        for (j = 0; j <= i; j++) {
            text += "*  ";
        }
        for (j = 0; j < i; j++) {
            text += "*  ";
        }
        console.log(text);
    }
    for (i = 0; i < 4; i++) {
        text = "";
        for (j = 0; j <= i; j++) {
            text += "   ";
        }
        for (j = i; j < 4; j++) {
            text += "*  ";
        }
        for (j = i; j < 3; j++) {
            text += "*  ";
        }
        console.log(text);
    }
})();
