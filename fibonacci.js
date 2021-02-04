// Time complexity: O(2^N)
function fibonacci(num) {
  if (num <= 1) {
    return 1;
  }

  return fibonacci(num - 1) + fibonacci(num - 2);
}

// Time complexity: O(N)
// function fibonacci(num) {
//   var a = 1,
//     b = 0,
//     temp;

//   while (num >= 0) {
//     temp = a;
//     a = a + b;
//     b = temp;
//     num--;
//   }

//   return b;
// }

console.log(fibonacci(6));
