// import express from 'express';

interface User {
    id: number;
    name: string;
    age: number;
    email: string;
    password: string;
}

// function sumOfAge(user1: User, user2: User) {
//     return user1.age + user2.age;
// }

// const age = sumOfAge({ name: "John", age: 18 }, { name: "Jane", age: 20 });

// console.log(age);
  interface updateProps{
    name: string;
    age: number;
    password: string;
  }


  function updateUser(updatedProps: updateProps){

    
  }