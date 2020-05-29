export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, pos) {
        // create 'li' element
        const li = document.createElement('li');
        // create 'h4'
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        // create paragraph tag
        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);
        // take 'li' element and append at position
        if (pos === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
