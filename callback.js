// n-th callback will become callback-hell

console.log("Start");

function loginUser(email, password, callback) {
  setTimeout(() => {
    console.log("Data loaded");
    callback({ userEmail: email })
  }, 2000);
}

function getUserVideo(email, callback) {
  setTimeout(() => {
    console.log("User video");
    callback(["video 1", "video 2"]);
  }, 1000);
}

function videoDetails(video, callback) {
  setTimeout(() => {
    console.log(video[0]);
  }, 2000);
}

// --
const user = loginUser("eka", 1234, user => {
  console.log(user)
  getUserVideo(user.username, videos => {
    console.log(videos);
    videoDetails(videos, details => {
      console.log(details);
    })
  })
})


console.log("Finish");