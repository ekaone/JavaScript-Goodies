const identity = { nama: "yuda", alamat: "surabaya", umur: 31 };

const result = Object.keys(identity).map(key => {
  const r = identity[key];
});

console.log(result);
