"use strict";
// explicit types
var character;
var age;
var isLoggedIn;
// arrays
var avengers = [];
avengers.push('Captain America');
// union types
var mixed = [];
mixed.push('hello');
mixed.push(20);
mixed.push(false);
console.log(mixed);
var uid;
// objects
var firstAvenger;
// you could declare an object
firstAvenger = { name: 'Steve Rogers', alias: 'Captain America', age: 102 };
// or you could declare an array
firstAvenger = [];
// we can define object properties types
var secondAvenger;
// Dynamic types
var userAge = 25;
// this could also work
userAge = true;
console.log(userAge);
// this too
userAge = 'Kiki';
console.log(userAge);
var hero;
hero = { name: 'kharioki', home: 'westlands' };
console.log(hero);
// Functions
var greet;
// then
greet = function () { return console.log('Waaaaassssuuuppp!!!'); };
var add = function (a, b, c) {
    return console.log(a + b);
};
add(5, 10);
// using the alias
var deets = function (uid, item) {
    return console.log(item + " has a uid of " + uid);
};
var sayHi = function (user) { return console.log(user.name + " says hello"); };
// Function signatures
var holla;
var calc;
// using signatures
holla = function (name, msg) { return console.log(name + " says " + msg); };
calc = function (num1, num2, action) {
    if (action === 'add') {
        return num1 + num2;
    }
    else {
        return num1 - num2;
    }
};
