// const obj = [
//   { id: 1, city: "Jakarta" },
//   { id: 2, city: "New York" },
//   { id: 3, city: "Tokyo" },
// ]

const obj = { a: 1, b: 2, c: 3 };

// Object.entries
// const result = Object.entries(obj)
const result = Object.entries(obj).map(([key, value]) => [key, value * 2]);
console.log(result);

// Object keys
// const result = Object.keys(obj).map(v => obj[v] *= 2)
// for(let key in obj) {
//   if(obj.hasOwnProperty(key)) {
//     obj[key] *= 2
//   }
// }

// Object.values
// const result = Object.keys(obj)
// console.log(result)
