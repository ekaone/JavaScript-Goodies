const identity = { nama: "john doe", alamat: "kalimantan", umur: 31 };

const result = Object.keys(identity).map(key => {
  return identity[key];
});

console.log(result); // [ 'john doe', 'kalimantan', 31 ]
