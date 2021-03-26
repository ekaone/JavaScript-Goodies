const object1 = { name: "eka", country: "USA" };

function filterKeys({ obj }) {
  let result = Object.keys(object1).includes("name");
  if (result) {
    return true;
  } else {
    return false;
  }
}

console.log(filterKeys(object1));
