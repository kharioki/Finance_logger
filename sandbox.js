var character = 'kharioki';
console.log(character);
var inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(function (input) {
    console.log({ input: input });
});
var circ = function (diameter) { return diameter * Math.PI; };
console.log(circ(7.9));
