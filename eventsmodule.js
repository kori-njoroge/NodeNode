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

