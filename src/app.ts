// classes
import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';

// interfaces
import { HasFormatter } from './interfaces/HasFormatter';

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice('tess', 'plumbing work', 400);
// docTwo = new Payment('ken', 'making breakfast', 500);

// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs);
// create invoice
// const invOne = new Invoice('kharioki', 'build a tesseract', 450);
// const invTwo = new Invoice('june', 'build a sceptre', 250);

// let invoices: Invoice[] = [];

// invoices.push(invOne);
// invoices.push(invTwo);

// invoices.forEach(inv => {
//   console.log(inv.client, inv.amount, inv.format());
// });

// input form
const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;

  if (type.value === 'invoice') {
    // create a new invoice
    doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
  } else {
    // create a new payment
    doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
  }

  console.log(doc);
});
