// const cities = ["jakarta", "texas", "tokyo"];

// const index = cities.indexOf("texas");
// console.log(index);
//index is `1`

const cities = [{ city: "jakarta" }, { city: "texas" }, { city: "tokyo" }];

const index = cities.findIndex((el, index) => {
  if (el.city === "tokyo") return true;
});

console.log(index);
