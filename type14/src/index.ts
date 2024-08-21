type User = {
    name : string;
    age : number;
}

const user = new Map<string,User>()

user.set("vsd122@",{name:"John",age:18})
user.set("vsd123@",{name:"Jane",age:20})

const user1 = user.get("vsd122@");

console.log(user1)