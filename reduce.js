const numbers = [1, 2, 3, 4];

// Menjumlahkan total value: 1 + 2 + 3 + 4
const r1 = numbers.reduce((previousValue, currentValue) => previousValue + currentValue);
console.log(r1); // output: 10 

// Mengalikan total value: 1 * 2 * 3 * 4
const r2 = numbers.reduce((previousValue, currentValue) => previousValue * currentValue);
console.log(r2); // output: 24


// Mengalikan setiap value dengan 2
const r3 = numbers.reduce((previousValue, currentValue) => { 
  previousValue.push(currentValue * 2)
  return previousValue;
}, []);
console.log(r3); // output: [ 2, 4, 6, 8 ]

// Menampilkan hanya lebih besar dari 2
const r4 = numbers.reduce((previousValue, currentValue) => {
  if(currentValue > 2) previousValue.push(currentValue)
  return previousValue
}, [])
console.log(r4); // output: [ 3, 4 ]

// Menampilkan hanya bilangan genap
const r5 = numbers.reduce((total, amount) => {
  if(amount % 2 === 0) total.push(amount)
  return total
}, [])
console.log(r5); // output: [ 2, 4 ]

// Menampilkan hanya bilangan ganjil
const r6 = numbers.reduce((total, amount) => {
  if(amount % 2 === 1) total.push(amount)
  return total
}, [])
console.log(r6); // output: [ 1, 3 ]

//------------

