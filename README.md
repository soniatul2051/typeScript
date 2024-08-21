# typeScript
TypeScript is a superset of JavaScript that adds static typing to the language. It allows developers to catch errors early during development by specifying types for variables, function parameters, return values, and more. TypeScript also includes features like interfaces, enums, and advanced type capabilities that make it easier to build and maintain large-scale applications.
Key Features of TypeScript:
Static Typing:
TypeScript introduces static types to JavaScript, meaning you can declare types for variables, function parameters, and return values.

typescript
Copy code
let age: number = 30;
let name: string = "John";
let isAdmin: boolean = true;
Interfaces:
Interfaces define the structure of an object, making it easier to enforce the shape of data.

typescript
Copy code
interface User {
  name: string;
  age: number;
  isAdmin?: boolean;  // Optional property
}

const user: User = {
  name: "Alice",
  age: 28,
};
Enums:
Enums allow you to define a set of named constants, making your code more readable and maintainable.

typescript
Copy code
enum Color {
  Red,
  Green,
  Blue,
}

let favoriteColor: Color = Color.Green;
Type Inference:
TypeScript can automatically infer the type of a variable based on its value.

typescript
Copy code
let count = 42;  // inferred as number
Generics:
Generics provide a way to create reusable components that work with a variety of types.

typescript
Copy code
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("Hello TypeScript");
Type Aliases:
Type aliases allow you to create new names for existing types.

typescript
Copy code
type ID = string | number;

let userId: ID = 123;
let orderId: ID = "abc123";
Union and Intersection Types:
Union types allow a variable to be one of several types, while intersection types combine multiple types into one.

typescript
Copy code
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;  // Intersection type

let employee: ElevatedEmployee = {
  name: "John",
  privileges: ["server-access"],
  startDate: new Date(),
};

let id: string | number;  // Union type
id = "123";
id = 123;
Modules:
TypeScript uses ES6-style modules to organize and share code across files.

typescript
Copy code
// mathUtils.ts
export function add(x: number, y: number): number {
  return x + y;
}

// main.ts
import { add } from './mathUtils';

console.log(add(2, 3));  // Output: 5
Classes:
TypeScript supports object-oriented programming with classes, inheritance, and access modifiers like public, private, and protected.

typescript
Copy code
class Animal {
  constructor(public name: string) {}

  move(distance: number): void {
    console.log(`${this.name} moved ${distance} meters.`);
  }
}

class Dog extends Animal {
  bark(): void {
    console.log("Woof! Woof!");
  }
}

const dog = new Dog("Rex");
dog.bark();  // Output: Woof! Woof!
dog.move(10);  // Output: Rex moved 10 meters.
Setting Up a TypeScript Project:
Installation:
Install TypeScript globally using npm:

bash
Copy code
npm install -g typescript
Creating a TypeScript File:
Create a .ts file and start writing TypeScript code.

typescript
Copy code
// hello.ts
const greet = (name: string): string => {
  return `Hello, ${name}!`;
};

console.log(greet("World"));
Compiling TypeScript to JavaScript:
Compile the TypeScript file into JavaScript using the TypeScript compiler (tsc):

bash
Copy code
tsc hello.ts
This generates a hello.js file that you can run with Node.js or in a browser.

TypeScript Configuration:
TypeScript projects typically include a tsconfig.json file to specify compiler options.

json
Copy code
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
Advanced TypeScript Features:
Mapped Types: Create new types by transforming existing ones.

typescript
Copy code
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};
Conditional Types: Perform type checks and create different types based on conditions.

typescript
Copy code
type IsString<T> = T extends string ? "yes" : "no";

type Test = IsString<string>;  // "yes"
