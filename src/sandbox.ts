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

let uid: string | number;

// objects
let firstAvenger: object;
// you could declare an object
firstAvenger = { name: 'Steve Rogers', alias: 'Captain America', age: 102 };
// or you could declare an array
firstAvenger = [];
// we can define object properties types
let secondAvenger: {
  name: string;
  alias: string;
  age: number;
};

// Dynamic types
let userAge: any = 25;

// this could also work
userAge = true;
console.log(userAge);
// this too
userAge = 'Kiki';
console.log(userAge);

let hero: { name: any; home: any };
hero = { name: 'kharioki', home: 'westlands' };
console.log(hero);

// Functions
let greet: Function;

// then
greet = () => console.log('Waaaaassssuuuppp!!!');

const add = (a: number, b: number, c?: number | string) => console.log(a + b);

add(5, 10);
