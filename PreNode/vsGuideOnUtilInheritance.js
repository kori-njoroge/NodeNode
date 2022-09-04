// vs code guide
/**
 * function inherits(constructor: unknown, superConstructor: unknown): void
Usage of util.inherits() is discouraged. Please use the ES6 class andextends keywords to get language level inheritance support. Also note that the two styles are semantically incompatible.

Inherit the prototype methods from one constructor into another. The prototype of constructor will be set to a new object created fromsuperConstructor.

This mainly adds some input validation on top ofObject.setPrototypeOf(constructor.prototype, superConstructor.prototype). As an additional convenience, superConstructor will be accessible through the constructor.super_ property.
*/
const util = require('util');
const EventEmitter = require('events');

function MyStream() {
  EventEmitter.call(this);
}

util.inherits(MyStream, EventEmitter);

MyStream.prototype.write = function(data) {
  this.emit('data', data);
};

const stream = new MyStream();

console.log(stream instanceof EventEmitter); // true
console.log(MyStream.super_ === EventEmitter); // true

stream.on('data', (data) => {
  console.log(`Received data: "${data}"`);
});
stream.write('It works!'); // Received data: "It works!"
// ES6 example using class and extends:

const EventEmitter = require('events');

class MyStream extends EventEmitter {
  write(data) {
    this.emit('data', data);
  }
}

// const stream = new MyStream();

stream.on('data', (data) => {
  console.log(`Received data: "${data}"`);
});
stream.write('With ES6');/**
@since — v0.3.0

@deprecated — Legacy: Use ES2015 class syntax and extends keyword instead.

The signature '(constructor: unknown, superConstructor: unknown): void' of 'util.inherits' is deprecated.ts(6387)
util.d.ts(490, 8): The declaration was marked as deprecated here.
No quick fixes available

*/