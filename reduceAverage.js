const average = (...args) => {
  return args.reduce((acc, el) => acc + el, 0) / args.length;
};

console.log(average(1, 2, 3, 4)); // 2.5
