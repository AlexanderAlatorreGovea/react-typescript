let age: number;

age = 23;

let userName: string;

//arrays and object types
//array of strings
let hobbies: string[];

hobbies = ["sports", "cooking"];

//objects
let person: {
  name: string;
  age: number;
};

person = {
  name: "Max",
  age: 32,
};

//an array of objects is declared like this
let people: {
  name: string;
  age: number;
}[];

//Type inference
//if the type is initialized, do not reassign any vals
let course = "";
course = "The complete guide";

//Unions
let numbers: string | number = 22;
numbers = 23;


//alias
//this is to set up a complex type of variable
type Person = {
    name: string,
    age: number
}

let peep: Person;

//functions and types

function add(a: number, b: number): number {
    return a + b
}

function Layout(): JSX.Element {
    return <div>hello</div>
}

//function with no return statement or a function
//that never returns is of type void
function printOutput(value: any): void {
    console.log(value)
}


//Generics <>
//With T we tell the arrays that the first and second
//type are not just any value but are of the same type

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray
}   

const demoArray = [1, 2, 3]

const updatedArray = insertAtBeginning(demoArray, -1)

export {}