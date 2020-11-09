// Destructing insode function
const rect = {
  width: 15,
  height: 15
};

const calculate = ({ width, height }) => {
  return 2 * (width + height);
};

console.log(calculate(rect));
