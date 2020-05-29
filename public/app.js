const me = {
    name: 'Tony',
    age: 28,
    speak(msg) {
        console.log(msg);
    },
    spend(amount) {
        console.log('I spent ', amount);
        return amount;
    }
};
const greetPerson = (person) => {
    console.log('Holla ', person.name);
};
greetPerson(me);
import { Invoice } from './classes/Invoice.js';
// create invoice
const invOne = new Invoice('kharioki', 'build a tesseract', 450);
const invTwo = new Invoice('june', 'build a sceptre', 250);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
// input form
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
