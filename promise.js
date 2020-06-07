// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("Success");
//     reject(new Error("Not logged in"));
//   }, 2000);
// });

// promise
//   .then(user => {
//     console.log(user);
//   })
//   .catch(err => {
//     console.log(err.message);
//   });

// n-th callback will become callback-hell

console.log("Start");

function loginUser(email, password) {
  return new Promise(resolve => {
      resolve({ userEmail: email })
    }, 3000);
}

function getUserVideos(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(email === "Eka") {
        resolve(["video 1", "video 2"]);
      } else {
        reject("No email / username");
      }
    }, 2000);
  });
}

function getVideoDetails(video) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Details video");
    }, 1000);
  });
}


loginUser("Eka", 123)
  .then(user => getUserVideos(user.userEmail))
  .then(videos => console.log(videos))
  .then(detail => getVideoDetails(detail))
  .catch(err => console.log(err))
  
console.log("Finish");
