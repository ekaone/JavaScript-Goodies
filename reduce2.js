const worlds = [
  { id: "1", city: "Jakarta", country: "Indonesia", population: 23 },
  { id: "2", city: "Tokyo", country: "Japan", population: 14 },
  { id: "3", city: "New York", country: "United States", population: 25 }
];

// Menghitung jumlah Object Property
result = worlds.reduce(acc => acc + 1, 0);
console.log(result); // ---- output: 3

// Mengihitung jumlah seluruh population
result = worlds.reduce((acc, pop) => acc + pop.population, 0);
console.log(result); // ---- output: 62

// Menampilkan semua city
result = worlds.reduce((acc, cty) => [...acc, cty.city], []);
console.log(result); // ---- output: [ 'Jakarta', 'Tokyo', 'New York' ]

// Menampilkan population terbanyak
result = worlds.reduce((acc, world) => {
  if (acc === null || world.population > acc) return world.population;
  return acc;
}, null);
console.log(result); // ---- output: 25

// Menampilkan population terkecil
result = worlds.reduce((acc, world) => {
  if (acc === null || world.population < acc) return world.population;
  return acc;
}, null);
console.log(result); // ---- output: 14

// Menampilkan object dengan property city "Tokyo"
result = worlds.reduce((acc, world) => {
  if (acc !== null) return acc;
  if (world.city === "Tokyo") return world;
  return null;
}, null);
console.log(result); // ---- output: { id: '2', city: 'Tokyo', country: 'Japan', population: 14 }
