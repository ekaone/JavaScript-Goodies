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


async function showDisplay() {
  try {
    const loggedUser = await loginUser("Eka", 123);
    const videos = await getUserVideos(loggedUser.userEmail);
    console.log(videos);
    const detail = await getVideoDetails(videos);
  } catch (error) {
    console.log("Can not get user");
  }
}

showDisplay();


console.log("Finish");
