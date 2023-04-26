"use strict";
(() => {
    class Rectangle {
        constructor(height, width) {
            this.height = height;
            this.width = width;
        }
        getArea() {
            return this.height * this.width;
        }
    }
    class Square extends Rectangle {
        constructor(width) {
            super(width, width);
            this.width = width;
        }
        getPerimeter() {
            return 4 * this.width;
        }
    }
    let r1 = new Rectangle(23, 54);
    console.log(r1.getArea());
    let s1 = new Square(10);
    console.log(s1.getArea());
    console.log("Perimeter: ", s1.getPerimeter());
})();
