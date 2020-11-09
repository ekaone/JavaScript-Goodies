const color = {
  red: "#FF0000"
};

"red" in color;

// with conditional
if ("red" in color) {
}

// with hasOwnProperty
console.log(color.hasOwnProperty("red"));
