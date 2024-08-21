// type User = {
//     readonly name : string;
//     readonly age : number;
// }

// const user : User = {
//     name : "John",
//     age : 18
// }


// user.name = "Jane"

//1st way
// interface Config{
//     readonly endpoints : string;
//     readonly apiKey : string;
// }

// const config : Config = {
//     endpoints : "https://api.example.com",
//     apiKey : "12345"
// }

//2nd way
interface Config{
     endpoints : string;
     apiKey : string;
}

const config : Readonly<Config> = {
    endpoints : "https://api.example.com",
    apiKey : "12345"
}