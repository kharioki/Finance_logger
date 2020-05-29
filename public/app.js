// classes
import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
// input form
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        // create a new invoice
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        // create a new payment
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    // render document created
    list.render(doc, type.value, 'end');
});
