/*
 * Higher order functions are functions which take other function as a parameter or return
 * a function as a value. The function passed as a parameter is called callback.
 */

// a callback function, the function could be any name
const callback = n => {
  return n ** 2;
};

// function take other function as a callback
function cube(callback, n) {
  return callback(n) * n;
}

console.log(cube(callback, 3));
