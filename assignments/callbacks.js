// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


// function getLength(arr, cb) {
//   // getLength passes the length of the array into the callback.
//   return cb(arr.length);
// }

const getLength = (arr, cb) => cb(arr.length);

// function last(arr, cb) {
//   // last passes the last item of the array into the callback.
//   return cb(arr.slice(-1).pop());
// }

const last = (arr, cb) => cb(arr.slice(-1).pop());

// function sumNums(x, y, cb) {
//   // sumNums adds two numbers (x, y) and passes the result to the callback.
//   return cb(x + y);
// }

const sumNums = (x, y, cb) => cb( x + y );

// function multiplyNums(x, y, cb) {
//   // multiplyNums multiplies two numbers and passes the result to the callback.
//   return cb(x * y);
// }

const multiplyNums = (x, y, cb) => cb( x * y );

// function contains(item, list, cb) {
//   // contains checks if an item is present inside of the given array/list.
//   // Pass true to the callback if it is, otherwise pass false.
//   return list.includes(item);
// }

const contains = (item, list, cb) => cb(list.includes(item));

// Better version for scale
const improvedContains = (item, list, cb) => cb(list.map((item) => item.toLowerCase()).includes(item.toLowerCase()));

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}

