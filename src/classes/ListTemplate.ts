/* 
  1. register a list container (ul) in the constructor
  2. create a render method to render a new (li) to the container
    -- accepts arguements: invoice or payment, a heading, a position
    -- create the html template (li, h4, p)
    -- add the 'li' template to the start/end of the list
*/
import { HasFormatter } from '../interfaces/HasFormatter.js';

export class ListTemplate {
  constructor(private container: HTMLUListElement) {}

  render(item: HasFormatter, heading: string, pos: 'start' | 'end') {
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
    } else {
      this.container.append(li);
    }
  }
}
