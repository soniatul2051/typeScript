"use strict";
function isLegalAge1(user) {
    if (user.age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
function greet1(user) {
    console.log("Hello " + user.firtsName);
}
isLegalAge1({ firtsName: "John", lastName: "Doe", age: 18 });
greet1({ firtsName: "John", lastName: "Doe", age: 18 });
