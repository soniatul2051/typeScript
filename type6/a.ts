type NumberArr = number[];

function maxValue(arr: NumberArr){
    let max = 0;
    for(let i = 0; i < arr.length; i++){
        if(max < arr[i]){
            max = arr[i];
        }
    }
    return max;
}

maxValue([1, 2, 3, 4, 5]);



interface User {
    firtsName: string;
    lastName: string;
    age: number;
    
}

function filterUser(users: User[]){

    return users.filter(user => user.age > 18);
}

