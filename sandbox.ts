const character = 'kharioki';

console.log(character);

const inputs = document.querySelectorAll('input');

console.log(inputs);

inputs.forEach(input => {
  console.log({ input });
});

const circ = (diameter: number) => diameter * Math.PI;

console.log(circ(7.9));
