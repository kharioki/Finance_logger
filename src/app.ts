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

  let doc: HasFormatter;

  if (type.value === 'invoice') {
    // create a new invoice
    doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
  } else {
    // create a new payment
    doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
  }

  // render document created
  list.render(doc, type.value, 'end');
});

// Generics
const addUID = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let docOne = addUID({ name: 'kharioki', age: 28 });

// console.log(docOne.name);

// ENUMS
enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON
}

interface Resource<T> {
  uid: number;
  resourceType: ResourceType;
  data: T;
}

const docTwo: Resource<object> = {
  uid: 1,
  resourceType: ResourceType.BOOK,
  data: { title: 'Start up nation' }
};

const docThree: Resource<object> = {
  uid: 2,
  resourceType: ResourceType.DIRECTOR,
  data: { title: 'kharioki' }
};

console.log(docTwo);
console.log(docThree);
