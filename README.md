# <img src="https://img.shields.io/badge/JavaScript-Goodies-Blue" alt="JS-Goodies" />

### 🔎 [Array Shuffle](https://github.com/ekaone/JavaScript-Goodies/blob/master/arrayShuffle.js)
```js
let list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
list = list.sort(() => Math.random() - 0.5);

console.log(list);
// 1st [ 1, 9, 7, 8, 4, 2, 3, 5, 6 ]
// 2nd [ 7, 8, 4, 3, 6, 9, 5, 2, 1 ]
```

### 🔎 [Slug](https://github.com/ekaone/JavaScript-Goodies/blob/master/objectEntriesSlug.js)
```js
const posts = {
  "mountain-view": {
    name: "Everest",
    height: 8848
  },
  "building-world": {
    name: "Burj Khalifa",
    height: 828
  }
};

const slugs = Object.entries(posts).map(([slug, { name, height }]) => {
  return slug;
});

console.log(slugs); // [ 'mountain-view', 'building-world' ]
```

### 🔎 [IIFE](https://github.com/ekaone/JavaScript-Goodies/blob/master/iife.js)
```js
(function() {
  // ...
})();

(() => {
  // ...
})();

```

### 🔎 [Map](https://github.com/ekaone/JavaScript-Goodies/blob/master/map.js)
```js
const obj = { a: 1, b: 2, c: 3 };

const result = Object.entries(obj).map(([key, value]) => [key, value * 2]);
console.log(result);
```

### 🔎 [Private Scope](https://github.com/ekaone/JavaScript-Goodies/blob/master/privateScopeFunction.js)
```js
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
```

## Author
✔ Eka Prasetia 🤵

<a href="https://www.ekaprasetia.com/">
  <img src="https://img.shields.io/badge/Writer-Blog-orange" alt="Blog" />
</a>

<a href="https://twitter.com/dannyeka">
  <img src="https://img.shields.io/badge/Tweet-Twitter-blue" alt="Twitter" />
</a>

<a href="mailto:ekaone3033@gmail.com">
  <img src="https://img.shields.io/badge/Email-ekaone3033@gmail.com-yellow" alt="Email" />
</a>

✔ Collection my App

Find example all my [Scratch App](https://twolevel.net)

✔ Community

I am author for two communities in Indonesia
- GatsbyJS Indonesia [Gatsby-ID](https://gatsbyjs.id)
- RedwoodJS Indonesia [Redwood-ID](https://redwoodjs.id)

