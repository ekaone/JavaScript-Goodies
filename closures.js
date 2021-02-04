// function outerFunction() {
//   let count = 0;
//   function plusOne() {
//     count++;
//     return count;
//   }
//   function minusOne() {
//     count--;
//     return count;
//   }

//   return {
//     plusOne: plusOne(),
//     minusOne: minusOne()
//   };
// }
// const innerFuncs = outerFunction();

// console.log(innerFuncs.plusOne);
// console.log(innerFuncs.minusOne);

function apiConnect(apiKey) {
  function get(route) {
    return fetch(`${route}?key=${apiKey}`);
  }

  function post(route, params) {
    return fetch(route, {
      method: "POST",
      body: JSON.stringify(params),
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    });
  }

  return { get, post };
}

const api = apiConnect("my-secret-key");

// No need to include the apiKey anymore
api.get("http://www.example.com/get-endpoint");
api.post("http://www.example.com/post-endpoint", { name: "Joe" });
