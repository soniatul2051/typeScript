// type Input =  number | string;

// function firstEl(arr: Input[]) {
//     return arr[0];
// }
// genric function
function firstEl<T>(arr: T):T {
    return arr;
}

let output1 = firstEl<number>(1);
let output2 = firstEl<string>("hello");