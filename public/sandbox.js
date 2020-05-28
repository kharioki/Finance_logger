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
var add = function (a, b, c) { return console.log(a + b); };
add(5, 10);
