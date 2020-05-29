// classes
import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';

// interfaces
import { HasFormatter } from './interfaces/HasFormatter';

// input form
const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  // values tuple
  let values: [string, string, number];
  values = [toFrom.value, details.value, amount.valueAsNumber];

  let doc: HasFormatter;
  if (type.value === 'invoice') {
    // create a new invoice
    doc = new Invoice(...values);
  } else {
    // create a new payment
    doc = new Payment(...values);
  }

  // render document created
  list.render(doc, type.value, 'end');
});
