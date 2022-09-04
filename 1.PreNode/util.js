const events = require('events')
const util = require('util')

class person {
    constructor(name){
        this.name = name;
    }
}

util.inherits(person, events.EventEmitter)

const mark = new person('Mark')
const james = new person ('James')

const people = [mark,james]

people.forEach(kaperson =>{
    kaperson.on('speak', (message) =>{
         console.log(`${kaperson.name} is the emitted ${message} kaperson`)
    })
})

mark.emit('speak' , 'Huuuge')