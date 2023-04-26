"use strict";
(() => {
    class Person {
        constructor(name, age) {
            this.name = "";
            this.age = 0;
            this.name = name;
            this.age = age;
        }
        getName() {
            return this.name;
        }
        getAge() {
            return this.age;
        }
        setName(name) {
            this.name = name;
        }
        setAge(age) {
            this.age = age;
        }
    }
    let x = 0;
    let p1 = new Person("", 0);
    p1.setName("Regal Maharjan");
    p1.setAge(23);
    console.log(p1);
    console.log(p1.getName());
})();
