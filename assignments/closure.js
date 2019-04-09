// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  var i= 0;
  return new function (){
		this.getcount = function () {return i;};
		this.increment = function (){return ++i;};
		this.decrement = function (){return --i;};
  };
};
const newCounter = counter();
 console.log(newCounter.increment()); // 1
 console.log(newCounter.increment()); // 2
 console.log(newCounter.increment()); // 3
 console.log(newCounter.decrement()); // 2