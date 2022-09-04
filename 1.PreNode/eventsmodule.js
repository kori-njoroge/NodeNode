/**Example 1  use of Event module
 * involves all the events/ actions on elements
*/

const events = require('events')

const emitter = new events.EventEmitter();//creating a new instance fron events module

emitter.on('someEvent', (message) =>{//creating custom event  which fires the function right after the event happens
    console.log(message)
})

emitter.emit('someEvent', 'I Lived in the moment in style') // making the event  and according the text to be displayed when the function is called

/**Example 2  use of Util module*/
const util = require('util')

class person {
    constructor(name) {
        this.name = name;
    }
}


util.inherits(person, events.EventEmitter);

const jake = new person('Jake')
const jared = new person('Jared')
const jacob = new person('Jacob')

const people = [jake,jared,jacob];

people.forEach(person => {
    person.on('speak', (message) =>{
        console.log (`${person.name} Said: ${message}`)
    })
    
});

jake.emit('speak', 'Am a big dude now')



