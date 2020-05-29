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
// Generics
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'kharioki', age: 28 });
// console.log(docOne.name);
// ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docTwo = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { title: 'Start up nation' }
};
const docThree = {
    uid: 2,
    resourceType: ResourceType.DIRECTOR,
    data: { title: 'kharioki' }
};
console.log(docTwo);
console.log(docThree);
