// Destructing inside function
// const rect = {
//   width: 15,
//   height: 15
// };

// const calculate = ({ width, height }) => {
//   return 2 * (width + height);
// };

// const calculate = result => {
//   return result.width + result.height;
// };

// console.log(calculate(rect));
// const todoList = [
//   {
//     task: "Prepare JS Test",
//     time: "4/1/2020 8:30",
//     completed: true
//   },
//   {
//     task: "Give JS Test",
//     time: "4/1/2020 10:00",
//     completed: false
//   },
//   {
//     task: "Assess Test Result",
//     time: "4/1/2020 1:00",
//     completed: false
//   }
// ];

// for (const { task, time, completed } of todoList) {
//   console.log(task, time, completed);
// }

// const countries = [
//   "Germany",
//   "France",
//   "Belgium",
//   "Finland",
//   "Sweden",
//   "Norway",
//   "Denmark",
//   "Iceland"
// ];

// const [gem, fran, ...all] = countries;
// console.log(gem, fran, all);
// const evens = [0, 2, 4, 6, 8, 10];
// const odds = [1, 3, 5, 7, 9];
// const allNumbers = [...evens, ...odds];

// const evenNumbers = [...evens];
// const oddNumbers = [...odds];
// console.log(evenNumbers);
// console.log(allNumbers);

// const user = {
//   name: "Asabeneh",
//   title: "Programmer",
//   country: "Finland",
//   city: "Helsinki"
// };

// const modify = { ...user, country: "UK" };
// console.log(modify);

// const users = [
//   {
//     name: "Brook",
//     scores: 75,
//     skills: ["HTM", "CSS", "JS"],
//     age: 16
//   },
//   {
//     name: "Alex",
//     scores: 80,
//     skills: ["HTM", "CSS", "JS"],
//     age: 18
//   },
//   {
//     name: "David",
//     scores: 75,
//     skills: ["HTM", "CSS"],
//     age: 22
//   },
//   {
//     name: "John",
//     scores: 85,
//     skills: ["HTML"],
//     age: 25
//   },
//   {
//     name: "Sara",
//     scores: 95,
//     skills: ["HTM", "CSS", "JS"],
//     age: 26
//   },
//   {
//     name: "Martha",
//     scores: 80,
//     skills: ["HTM", "CSS", "JS"],
//     age: 18
//   },
//   {
//     name: "Thomas",
//     scores: 90,
//     skills: ["HTM", "CSS", "JS"],
//     age: 20
//   }
// ];

// // for (const { name, scores, skills, age } of users) {
// //   console.log(name, scores, skills, age);
// // }
// const constants = [2.72, 3.14, 9.81, 37, 100];
// const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
// const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
// const [fin, est, sw, den, nor] = countries;

// console.log(Object.keys(users));

// const result = () =>
//   users.filter(r => {
//     return r.skills.length == 3;
//   });

// console.log(result());

const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]]
];

// const [name, skills, scores] = students;
// const convertArrayToObject = arr => {
//   for (const [name, skills, scores] of arr) {
//     return [{ name, skills, scores }];
//   }
// };

// function convertArrayToObject(arr) {
//   return arr.map(el => {
//     return {
//       name: el[0],
//       skills: el[1],
//       scores: el[2]
//     };
//   });
// }

const convertArrayToObject = arr => {
  let r = [];
  for (const [name, skills, scores] of students) {
    r.push({ name, skills, scores });
  }
  return r;
};

console.log(convertArrayToObject(students));

// for (const [name, skills, scores] of students) {
//   console.log([{ name, skills, scores }]);
// }

// const person = {
//   name: "Eka",
//   add: "Jakarta"
// };

// function introduce({ name, add }) {
//   console.log(`I am ${name} and live in ${add}`);
// }

// introduce(person);
