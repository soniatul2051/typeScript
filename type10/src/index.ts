interface User {
    firtsName: string;
    lastName: string;
    age: number;
    email: string;
    cratedAt: Date;
}

type UserProfile = Pick<User, "firtsName" | "lastName" | "age">;

const displayUser = (user: UserProfile) => {
    console.log(`Name: ${user.firtsName} ${user.lastName}, Age: ${user.age}`);
}