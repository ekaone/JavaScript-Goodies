const isPromise = require("is-promise");

// function foo() {
//   return true;
// } // output: false

// async function foo() {
//   return await foo();
// } // output: true

// function foo() {
//   return new Promise(resolve => {
//     resolve("is Promise");
//   });
// } // output: true

function foo(mail, callback) {
  return callback({ mail });
}

const r = foo("Eka", result => result);
// foo("Eka", result => console.log(result));

console.log(r);

// isPromise(Promise.resolve());//=>true
// isPromise({then:function () {...}});//=>true
// isPromise(null);//=>false
// isPromise({});//=>false
// isPromise({then: true})//=>false
