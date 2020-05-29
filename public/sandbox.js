"use strict";
// explicit types
let character;
let age;
let isLoggedIn;
// arrays
let avengers = [];
avengers.push('Captain America');
// union types
let mixed = [];
mixed.push('hello');
mixed.push(20);
mixed.push(false);
console.log(mixed);
let uid;
// objects
let firstAvenger;
// you could declare an object
firstAvenger = { name: 'Steve Rogers', alias: 'Captain America', age: 102 };
// or you could declare an array
firstAvenger = [];
// we can define object properties types
let secondAvenger;
// Dynamic types
let userAge = 25;
// this could also work
userAge = true;
console.log(userAge);
// this too
userAge = 'Kiki';
console.log(userAge);
let hero;
hero = { name: 'kharioki', home: 'westlands' };
console.log(hero);
// Functions
let greet;
// then
greet = () => console.log('Waaaaassssuuuppp!!!');
const add = (a, b, c) => console.log(a + b);
add(5, 10);
// using the alias
const deets = (uid, item) => console.log(`${item} has a uid of ${uid}`);
const sayHi = (user) => console.log(`${user.name} says hello`);
// Function signatures
let holla;
let calc;
// using signatures
holla = (name, msg) => console.log(`${name} says ${msg}`);
calc = (num1, num2, action) => {
    if (action === 'add') {
        return num1 + num2;
    }
    else {
        return num1 - num2;
    }
};
// Generics
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'kharioki', age: 28 });
// console.log(docOne.name);
// ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docTwo = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { title: 'Start up nation' }
};
const docThree = {
    uid: 2,
    resourceType: ResourceType.DIRECTOR,
    data: { title: 'kharioki' }
};
console.log(docTwo);
console.log(docThree);
// tuples
let arr = ['kiki', 28, true];
let tup = ['bunnie', 25, true];
