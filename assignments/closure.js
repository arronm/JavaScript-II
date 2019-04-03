// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const state = () => {
  let country = 'United States';
  let name = 'California';
  let governor = 'Gavin Newsom';
  const city = () => {
    let name = 'San Francisco';
    let mayor = 'London Breed';
    return governor;
  }
  return city();
}

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = (count = 1) => () => count++;

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = (counter = 1) => ({
  increment() {
    return counter++;
  },
  decrement() {
    return counter --;
  }
});

const counterIIFE = (() => {
  let counter = 1;
  return {
    increment() {
      return counter++;
    },
    decrement() {
      return counter--;
    }
  };
})();
