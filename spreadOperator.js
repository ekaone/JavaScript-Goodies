const user1 = {
  name: "John",
  age: 40,
  admin: true
};

const user2 = {
  name: "Dow",
  age: 35
};

const merged = {
  ...user1,
  ...user2
};

console.log(merged);
// { name: 'Dow', age: 35, admin: true }
