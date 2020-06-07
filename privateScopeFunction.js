const privateScope = (() => {
  const foo = "Foo";
  const bar = "Bar";
  const printFoo = () => {
    return `hi, i am ${foo}`;
  };
  const printBar = () => {
    return `hi, i am ${bar}`;
  };

  return { printFoo, printBar };
})();

console.log(privateScope.printFoo()); // hi, i am Foo
console.log(privateScope.printBar()); // hi, i am Bar
console.log(privateScope.foo); // undefined
