type User ={
    firtsName: string;
    lastName: string;
    age: number;
    email?: string;
}

//Union
type GreetArg = number | string | boolean;


function greet(arg: GreetArg) {


}


greet(2);
greet(true);
greet("Hello");


// Intersection


type Employee = {
    name: string;
    startDate: Date;
};

type Manager = {
    name: string;
    department: string;
};

type TeamLead = Employee & Manager;

const teamLead: TeamLead = {
    name: "Atul",
    startDate: new Date(),
    department: "Engineering",
}