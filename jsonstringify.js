const objects = [
  { name: "Eka Prasetia" },
  { city: "Jakarta" },
  { hobby: "Play codes" }
];

// JSON.stringify(objects, ["name", "hobby"], 2);
// output "name" and "hobby" properties

// change property value
const result = JSON.stringify(
  objects,
  (key, value) => {
    if (key.match(/name|city/)) return "👨‍👩‍👧✌";
    return value;
  },
  2
);
// output [{ "name": "👨‍👩‍👧✌"},{"city": "👨‍👩‍👧✌"},{"hobby": "Play codes"}]
