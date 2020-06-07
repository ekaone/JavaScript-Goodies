let list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
list = list.sort(() => Math.random() - 0.5);

console.log(list);
// 1st [ 1, 9, 7, 8, 4, 2, 3, 5, 6 ]
// 2nd [ 7, 8, 4, 3, 6, 9, 5, 2, 1 ]
