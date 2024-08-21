"use strict";
class Employee {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    greet(phrase) { `${phrase} ${this.name}!`; }
}
const e = new Employee("Max", 30);
console.log(e.name);
