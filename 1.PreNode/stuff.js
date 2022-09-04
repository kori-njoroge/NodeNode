const counter = function (arr) {
  return `There are ${arr.length} elements in the array`;
};

const adder = function (a, b) {
  return `The sum equals  ${a + b}`;
};

const pi = 3.14;

// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi//
/**this method is cool but we can do better */

//The best yet

module.exports = {
  counter: counter,
  adder: adder,
  pi: pi,
};
 