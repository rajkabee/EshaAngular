"use strict";
(() => {
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    let p = new Person("Alina", 33);
    console.log(p);
})();
