function isEven(element) {
  return element % 2 === 0;
}

const elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(elements.filter(isEven));
