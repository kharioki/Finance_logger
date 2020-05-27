// explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

// arrays
let avengers: string[] = [];

avengers.push('Captain America');

// union types
let mixed: (string | number | boolean)[] = [];

mixed.push('hello');
mixed.push(20);
mixed.push(false);
console.log(mixed);

// objects
