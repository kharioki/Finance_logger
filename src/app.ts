// interfaces
interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: 'Tony',
  age: 28,
  speak(msg: string): void {
    console.log(msg);
  },
  spend(amount: number): number {
    console.log('I spent ', amount);
    return amount;
  }
};

const greetPerson = (person: IsPerson) => {
  console.log('Holla ', person.name);
};

greetPerson(me);

import { Invoice } from './classes/Invoice.js';

// create invoice
const invOne = new Invoice('kharioki', 'build a tesseract', 450);
const invTwo = new Invoice('june', 'build a sceptre', 250);

let invoices: Invoice[] = [];

invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(inv => {
  console.log(inv.client, inv.amount, inv.format());
});

// input form
const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
