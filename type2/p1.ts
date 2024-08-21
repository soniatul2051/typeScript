interface User{
    firtsName: string;
    lastName: string;
    age: number;
    email?: string;
}

function isLegalAge1(user: User){
    if(user.age >= 18){
        return true;
    } else {
        return false;
    }
}

function greet1(user: User){
    console.log("Hello " + user.firtsName);
}

isLegalAge1({firtsName: "John", lastName: "Doe", age: 18});
greet1({firtsName: "John", lastName: "Doe", age: 18});