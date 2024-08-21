var a = 10;

console.log(a);
//argument of a function
function greet (firstName: string){

    console.log("Hello " + firstName);
}

greet("John");

//type to a function
function sum(a: number, b: number) {
    return a + b;   
}

const result = sum(7,9);
console.log(result);

//type inference
function isLegalAge(age: number): boolean {
    if(age >= 18) {
        return true;
    } else {    
        return false;
    }
}

console.log(isLegalAge(17));


//create a function that takes another function
function runAfter1s(fn: () => void) {
    setTimeout(fn, 1000);
}

runAfter1s(() => console.log("Hello World"))