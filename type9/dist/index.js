"use strict";
// import express from 'express';
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const age = sumOfAge({ name: "John", age: 18 }, { name: "Jane", age: 20 });
console.log(age);
